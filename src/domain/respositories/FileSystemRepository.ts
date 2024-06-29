import ITeam from "../entities/ITeam";
import IRepository from "./IRepository";
const fs = require('fs').promises;
const path = require('path');


type Country = {
    name: {
        common: string
    },
    region: string
};

export default abstract class FileSystemRepository<ModelGeneric extends ITeam> implements IRepository<ModelGeneric>
{
    
    constructor() {
    }

    private async _getAllTeams(): Promise<ModelGeneric[]> {
        const filePath = path.join(__dirname, '../db/countries.txt');
            
        const data = await fs.readFile(filePath, 'utf8'); // Non-Blocking operation :D
        const dataJson = JSON.parse(data);

        const allCountries = dataJson.map((obj: Country) => ({ name: obj.name.common, region: obj.region }));

        return [...allCountries];
    }

    async getAll(): Promise<ModelGeneric[]> {
        try {
            return this._getAllTeams();
          } catch (err) {
            throw err;
          }
    }

    async getByRegion(region: string): Promise<ModelGeneric[]> {
        try {
            const teams = await this._getAllTeams();
            
            return teams.filter((obj) => (obj.region === region));
          } catch (err) {
            throw err;
          }
    }

}