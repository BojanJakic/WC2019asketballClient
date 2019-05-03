import { PlayerPosition } from '../enums/player-position';
import { RealTeam } from './real-team';
import { FantasyTeam } from './fantasy-team';
import { PlayerStatistics } from './player-statistics';

export interface Player {
    id?: number
    firstName: string;
    lastName: string;
    height: number;
    dateOfBirth: Date;
    position: PlayerPosition;
    fantasyValue: number;
    realTeam: RealTeam;
    fantasyTeam?: FantasyTeam[];
    playerStatistics?: PlayerStatistics[];
    profilePicture: string;
}