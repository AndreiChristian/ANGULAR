import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('f') singnupForm: NgForm;
  defaultQuestion: string = 'pet';
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: '',
  };
  submitted = false;

  answer: string;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.singnupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: '',
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male',
    // });
    this.singnupForm.form.patchValue({
      userData: {
        username: suggestedName,
      },
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form.value);
  // }

  onSubmit() {
    this.submitted = true;
    this.user.username = this.singnupForm.value.userData.username;
    this.user.email = this.singnupForm.value.userData.email;
    this.user.secretQuestion = this.singnupForm.value.secret;
    this.user.answer = this.singnupForm.value.questionAnswer;
    this.user.gender = this.singnupForm.value.gender;
    
    this.singnupForm.reset();
  }
}
