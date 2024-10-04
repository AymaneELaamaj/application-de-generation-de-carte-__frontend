import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RedalService } from '../service/redal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private fb: FormBuilder, private redservice: RedalService, private router: Router) {}

  ngOnInit(): void {

  }
  goto(){}

  onSubmit() {}
  //   const user = { username: this.username, password: this.password };

  //   this.redservice.Login(user).subscribe({
  //     next: (response) => {
  //       console.log('Login successful:', response);

  //     },
  //     error: (error) => {
  //       console.error('Login error:', error);
  //     }
  //   });
  // }
}
