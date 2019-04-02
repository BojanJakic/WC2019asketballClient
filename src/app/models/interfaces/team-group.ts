import { RealTeam } from './real-team';
import { GroupName } from '../enums/group-name';

export interface TeamGroup {
    id: number;
    teams: RealTeam[];
    groupName: GroupName;
}