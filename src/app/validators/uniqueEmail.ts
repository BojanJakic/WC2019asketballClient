import { AbstractControl } from '@angular/forms';
import { UserService } from '../services/user/user.service';

export class UniqueEmailValidator {
	static emailNotUnique(userService: UserService) {
		return (c: AbstractControl) => {
			console.log(c.value)
			return userService.findByEmail(c.value).map(response => {
				return response ? { emailNotUnique: true } : null;
			})
		}
	}
}