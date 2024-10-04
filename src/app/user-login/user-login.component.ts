import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RedalService } from '../service/redal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent implements OnInit {

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
    const email = this.userformgroup.value.email;
    const password = this.userformgroup.value.password;

    // if (!email || !password) {
    //   alert('Veuillez entrer votre email et votre mot de passe.');
    //   return;
    // }

    this.redalservice.Login(email).subscribe({
      next: (data) => {
        if (data && data.password === password) {
          this.redalservice.setCurrentUser(data);
          alert('Connexion réussie');
          this.router.navigate(['/search']);
          this.userformgroup.reset();
        } else {
          alert('Email ou mot de passe incorrect.');
        }
      },
      error: (err) => {
        console.log(err);
        alert('Une erreur s\'est produite. Veuillez réessayer plus tard.');
      }
    });

  }






}

