
import ITeam from "../domain/entities/ITeam";
import TeamRepository from "../domain/respositories/TeamRepository";
import AbstractUseCases from "./AbstractUseCase";

export default class TeamUseCases extends AbstractUseCases<
  ITeam,
  TeamRepository
> {

    constructor(teamsRepository: TeamRepository) {
        super(teamsRepository);
    }

    async getByRegion(region: string): Promise<ITeam[]>{
      return this.repository.getByRegion(region);
    }

    async getAllRegions(): Promise<string[]>{
      return this.repository.getAllRegions();
    }

    async getAllV2(): Promise<AllTeamsV2>{
      const teams = await this.getAll();
      return {
        teams: teams,
        sample: 'This is an example of route versioning. Custom logic comes here :D'
      }
    }
}