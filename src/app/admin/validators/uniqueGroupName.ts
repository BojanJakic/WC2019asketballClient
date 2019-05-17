import { AbstractControl } from '@angular/forms';
import { TeamGroupService } from '../../services/team-group/team-group.service';

export class UniqueGroupNameValidator {

	static uniqueGroupName(teamGroupService: TeamGroupService) {
		return (c: AbstractControl) => {
			return teamGroupService.findByName(c.value).map(response => {
				return response
					? { validateName: true }
					: null
			})
		}
	}
}
