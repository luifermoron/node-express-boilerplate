export {};

import ITeam from "../domain/entities/ITeam";

declare global {
    type AllTeamsV2 = {
        teams: Iteam[],
        sample?: string,
    }
}