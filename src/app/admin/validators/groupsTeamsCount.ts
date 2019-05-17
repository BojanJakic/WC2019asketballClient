import { AbstractControl } from '@angular/forms';

export class GroupsTeamsCountValidator {
  static teamCount(c: AbstractControl) {
    let count = 0;
    c.value.forEach(current => {
      if (current) {
        count++
      }
    })

    return count === 4
      ? null
      : { selectedTeamsCount: true }
	}
}

// export function teamCount(c: AbstractControl){
// 	let count = 0;
// 	c.value.forEach(current => {
// 		if (current) {
// 			count++
// 		}
// 	})

// 	return count === 4
// 		? null
// 		: { selectedTeamsCount: true }
// }
//}