import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent implements OnInit {
  user: User;
  registerationForm: FormGroup;
  userSubmitted: boolean;

  constructor(
    private fb: FormBuilder,
    private userService: UserServiceService
  ) {}

  ngOnInit(): void {
    // this.registerationForm = new FormGroup({
    //   userName: new FormControl(null, Validators.required),
    //   email: new FormControl(null, [Validators.required, Validators.email]),
    //   password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    //   confirmPassword: new FormControl(null, [Validators.required]),
    //   mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)])
    // }, this.passwordMatchingValidator);

    this.createregistrationForm();
  }

  createregistrationForm(): void {
    this.registerationForm = this.fb.group(
      {
        userName: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required, Validators.minLength(8)]],
        confirmPassword: [null, [Validators.required]],
        mobile: [null, [Validators.required, Validators.maxLength(10)]],
      },
      { validators: this.passwordMatchingValidator }
    );
  }

  passwordMatchingValidator(fg: FormGroup): Validators {
    return fg.get('password').value === fg.get('confirmPassword').value
      ? null
      : { notmatched: true };
  }

  // tslint:disable-next-line: typedef
  get userName() {
    return this.registerationForm.get('userName') as FormControl;
  }
  // tslint:disable-next-line: typedef
  get email() {
    return this.registerationForm.get('email') as FormControl;
  }
  // tslint:disable-next-line: typedef
  get password() {
    return this.registerationForm.get('password') as FormControl;
  }
  // tslint:disable-next-line: typedef
  get confirmPassword() {
    return this.registerationForm.get('confirmPassword') as FormControl;
  }
  // tslint:disable-next-line: typedef
  get mobile() {
    return this.registerationForm.get('mobile') as FormControl;
  }

  userData(): User {
    return (this.user = {
      userName: this.userName.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value,
    });
  }

  onSubmit(): void {
    // console.log(this.registerationForm);
    this.userSubmitted = true;
    if (this.registerationForm.valid) {
      this.userService.addUser(this.userData());
      this.registerationForm.reset();

      this.userSubmitted = false;
    }
  }

  onReset(): void {
    console.log(this.registerationForm);
  }
}
