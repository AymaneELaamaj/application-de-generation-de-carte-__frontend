import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Users } from '../Model/user.model';
import { RedalService } from '../service/redal.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  userformgroup!: FormGroup;
  email = '';
  password = '';


  constructor(private fb: FormBuilder,private redalservice:RedalService,private router:Router) {}

  ngOnInit(): void {
    this.userformgroup = this.fb.group({
      email: this.fb.control(null),
      password: this.fb.control(null)
    });
  }
  onSubmit() {
    let email = this.userformgroup.value.email;
    this.redalservice.Login(email).subscribe({
      next: (data) => {
        this.redalservice.setCurrentUser(data);
        alert('Login successful');
        this.router.navigate(['/search']);
        this.userformgroup.reset();
      },
      error: (err) => {
        console.log(err);
      }
    });
  }




}
