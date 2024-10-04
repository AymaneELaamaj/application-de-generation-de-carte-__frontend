import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RedalService } from '../service/redal.service';
import { Router } from '@angular/router';
import { Users } from '../Model/user.model';

@Component({
  selector: 'app-userregistre',
  templateUrl: './userregistre.component.html',
  styleUrl: './userregistre.component.css'
})
export class UserregistreComponent implements OnInit {
  registreform!:FormGroup
  roles: string[] = ['Admin', 'User']; // Liste des rôles


  constructor(private fb:FormBuilder, private redalservice:RedalService,private router:Router){}
  ngOnInit(): void {
    this.registreform=this.fb.group({
      username:this.fb.control(null,[Validators.required]),
      email: [null, [Validators.required, Validators.email]], // Validation de l'email
      password:this.fb.control(null,[Validators.required]),

      repeatpassword:this.fb.control(null,[Validators.required]),
    })

  }
  registre() {


    // Vérifiez la validité spécifique du champ email
    const emailControl = this.registreform.get('email');
    if (emailControl?.invalid) {

      return; // Ne pas continuer si l'email est invalide
    }

    // Si le formulaire est valide et l'email est correct, procédez à l'inscription
    let user: Users = this.registreform.value;

    this.redalservice.Registre(user).subscribe({
      next: (data) => {
        alert("Inscription réussie");
        this.router.navigate(['']);
        this.registreform.reset();
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

}
