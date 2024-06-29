import express from 'express';

import versionMiddleware from "../../middlewares/versionMiddleware";
import { ROUTE_VERSION_TWO } from "../utils";

const getTeams = require('./get-teams');

export default function teamsRouter() {
    const teamsRoutes = express.Router({ mergeParams: true });
    
    teamsRoutes.get('/', versionMiddleware(ROUTE_VERSION_TWO), getTeams.V2('getAll'));
    
    teamsRoutes.get('/', getTeams.V1('getAll'));
    teamsRoutes.get('/regions/', getTeams.V1('getAllRegions'));
    teamsRoutes.get('/:region', getTeams.V1('getByRegion'));
    return teamsRoutes;
}