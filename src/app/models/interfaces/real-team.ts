import { TeamGroup } from './team-group';

export interface RealTeam {
    id?: number;
    name: string;
    wonGames?: number;
    lostGames?: number;
    scoredPoints?: number;
    opponentsPoints?: number;
    teamGroup?: TeamGroup[];
}