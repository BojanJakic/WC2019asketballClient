import { FantasyTeam } from './fantasy-team';

export interface User {
	id?: number,
	firstName: string,
	lastName: string,
	username: string,
	password: string,
	email: string,
	fantasyTeam?: FantasyTeam;    
}