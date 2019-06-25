import { Component, OnInit } from '@angular/core';
 import { AuthenticationService } from '../Shared/Services/authentication.service';
 import { FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

    loginForm:FormGroup;
    submitted = false;

 constructor(private formBuilder: FormBuilder)
 {

 }
  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

onsubmit()
{
  this.submitted = true;

  // stop here if form is invalid
  if (this.loginForm.invalid) {
      return;
  }
}
}
