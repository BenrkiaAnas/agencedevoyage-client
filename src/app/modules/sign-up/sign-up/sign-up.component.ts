import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material';
import {UserService} from '../../../services/user.service';
import {Router} from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  inscriptionForm: FormGroup;
  confirmPasswordMatcher = new MyErrorStateMatcher();
  hide = true;

  constructor(private formBuilder: FormBuilder,
              private service: UserService,
              private router: Router) {
  }

  ngOnInit() {
    this.inscriptionForm = this.formBuilder.group({
      id: [''],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: [''],
      gendre: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      tele: ['', Validators.required],
      profession: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
    }, {validator: this.checkPasswords});
  }

  checkPasswords(group: FormGroup) {
    let pass = group.controls.password.value;
    let confirmPass = group.controls.confirmPassword.value;

    return pass === confirmPass ? null : {notSame: true};
  }

  onSubmit() {
    if (this.inscriptionForm.valid) {
      this.service.inscription(this.inscriptionForm.value).subscribe(
        res => {
          console.log(res);
          if (res['code'] === 1) {
            this.service.sendMailActivation(res['data']).subscribe(resSend => console.log(resSend));
          }
          // this.router.navigate(['/']);
        });

    }
  }
}
