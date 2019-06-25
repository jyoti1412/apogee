import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor( private _fb: FormBuilder ) { }


  getSignUpForm(): FormGroup {
    return this._fb.group({
      email: ['', [Validators.required]],
      userName: ['', [Validators.required]],
      mobileNumber: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    })
  }

  getloginForm(): FormGroup {
    return this._fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }
}
