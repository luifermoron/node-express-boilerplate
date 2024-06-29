
import { Request, Response } from "express";
import TeamUseCases from "../../../../../useCases/TeamUseCases";


export default function getAllTeams(teamUseCases: TeamUseCases) {
  return {
    getAll: async (req: Request, res: Response) => {
      const teams = await teamUseCases.getAllV2();
      res.json(teams);
    },
  }
}