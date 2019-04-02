import { Player } from './player';
import { Round } from '../enums/round';

export interface PlayerStatistics {
    id: string;
    points: number;
    onePoints: number;
    twoPoints: number;
    threePoints: number;
    offensiveRebounds: number;
    defensiveRebounds: number;
    assists: number;
    turnover: number;
    steals: number;
    indexRating: number;
    player: Player;
    round: Round;
}