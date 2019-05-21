import { Component, OnInit } from '@angular/core';
import { User } from '../../models/interfaces/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UniqueUsernameValidator } from '../../validators/uniqueUsername';
import { UniqueEmailValidator } from '../../validators/uniqueEmail';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  user: User = {
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: ''
  }
  userForm: FormGroup;
  isSubmitted: boolean;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.setFormData();
  }

  save() {
    this.isSubmitted = true;
    if(this.userForm.invalid) {
      return;
    }
    this.userService.save(this.userForm.value).subscribe(response => {
      console.log(response)
    })
  }

  setFormData() {
    this.userForm = new FormGroup({
      firstName: new FormControl(this.user.firstName, Validators.required),
      lastName: new FormControl(this.user.lastName, Validators.required),
      username: new FormControl(this.user.username, Validators.required, [UniqueUsernameValidator.usernameNotUnique(this.userService)]),
      password: new FormControl(this.user.password, Validators.required),
      email: new FormControl(this.user.email, [Validators.required,Validators.pattern(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/)], 
        [UniqueEmailValidator.emailNotUnique(this.userService)])
    })
  }
}
