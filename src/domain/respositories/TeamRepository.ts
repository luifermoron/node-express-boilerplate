import FileSystemRepository from "./FileSystemRepository";
import ITeam from "../entities/ITeam";

export default class TeamRepository extends FileSystemRepository<ITeam> {
    constructor() {
        super();
    }

    async getAllRegions(): Promise<string[]> {
        try {
            const teams = await this.getAll();
            
            return Array.from(new Set(teams.map((obj) => (obj.region))));
          } catch (err) {
            throw err;
          }
    }
}