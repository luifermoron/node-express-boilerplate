
import { Request, Response } from "express";
import TeamUseCases from "../../../../../useCases/TeamUseCases";


export default function getAllTeams(teamUseCases: TeamUseCases) {
  return {
    getAll: async (req: Request, res: Response) => {
      const teams = await teamUseCases.getAll();
      res.json(teams);
    },
    getByRegion: async (req: Request, res: Response) => {
      const { region } = req.params;
      const teams = await teamUseCases.getByRegion(region);
      res.json(teams);
    },
    getAllRegions: async (req: Request, res: Response) => {
      const regions = await teamUseCases.getAllRegions();
      res.json(regions);
    } 
  }
}

