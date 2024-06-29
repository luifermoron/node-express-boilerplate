import { Request, Response } from 'express';
import { makeInvoker } from 'awilix-express';
import GetTeamsV1 from './get-teams.v1';
import GetTeamsV2 from './get-teams.v2';


const getAllV2 = makeInvoker(GetTeamsV2);
exports.V2 = getAllV2;

const getAllV1 = makeInvoker(GetTeamsV1);
exports.V1 = getAllV1;