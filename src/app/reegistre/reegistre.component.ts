import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RedalService } from '../service/redal.service';
import { Users } from '../Model/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reegistre',
  templateUrl: './reegistre.component.html',
  styleUrls: ['./reegistre.component.css']
})
export class ReegistreComponent implements OnInit {
  registreform!: FormGroup;
  roles: string[] = ['Admin', 'User']; // Liste des rôles

  constructor(private fb: FormBuilder, private redalservice: RedalService, private router: Router) { }

  ngOnInit(): void {
    this.registreform = this.fb.group({
      username: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      role: [null, [Validators.required]], // Ajouter un champ pour la sélection
      repeatpassword: [null, [Validators.required]]
    }, {
      validator: this.mustMatch('password', 'repeatpassword')
    });
  }

  registre() {
    if (this.registreform.invalid) {
      this.registreform.markAllAsTouched(); // Marquer tous les champs comme touchés pour afficher les messages d'erreur
      return;
    }

    let user: Users = this.registreform.value;
    this.redalservice.Registre(user).subscribe({
      next: (data) => {
        alert("Added successfully");
        this.registreform.reset();
        this.router.navigate(['/home']); // Redirection après l'inscription
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  // Custom validator to check if password and repeatpassword match
  mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
        return;
      }

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
}
