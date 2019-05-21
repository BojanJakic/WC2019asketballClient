import { UserService } from '../services/user/user.service';
import { AbstractControl } from '@angular/forms';

export class UniqueUsernameValidator {
	static usernameNotUnique(userService: UserService) {
		return (c: AbstractControl) => {
			return userService.findByUsername(c.value).map(response => {
				return response ? { usernameNotUnique: true } : null;
			})
		}
	}
}