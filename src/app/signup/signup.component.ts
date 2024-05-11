import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.signupForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  signUp() {
    const email = this.signupForm.value.email;
    const password = this.signupForm.value.password;
    this.auth.signUp(email, password)
      .then(() => {
        console.log('User signed up successfully!');
        // Redirect or show success message
      })
      .catch(error => {
        console.error('Error signing up:', error);
        // Handle error
      });
  }

}
