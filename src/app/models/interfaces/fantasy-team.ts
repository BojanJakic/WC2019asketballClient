import { Player } from './player';

export interface FantasyTeam {
    id: number;
    name: string;
    fantasyPoints: number;
    players: Player[];
}