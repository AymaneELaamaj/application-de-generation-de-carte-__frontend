import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RedalService } from '../service/redal.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private map: any;
  selectedFile!: File;
  entitiesData: any[] = [];
  progress: number = 0;
  message: string = '';
  isAdmin: boolean = false; // Ajouter la propriété isAdmin

  constructor(private redalservice: RedalService, private router: Router) {}

  ngOnInit(): void {
    this.onFileSelected = this.onFileSelected.bind(this);
    this.onUpload = this.onUpload.bind(this);
    this.signup = this.signup.bind(this);
    this.checkAdmin(); // Appeler la méthode pour vérifier si l'utilisateur est admin

  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  onUpload(): void {
    this.progress = 0;

    if (this.selectedFile) {
      this.redalservice.upload(this.selectedFile).subscribe({
        next: (event: any) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progress = Math.round(100 * event.loaded / event.total);
          } else if (event instanceof HttpResponse) {
            this.message = 'Fichier téléchargé avec succès!';
            // Réinitialiser la progression après un téléchargement réussi
            this.progress = 100;
            setTimeout(() => {
              this.progress = 0; // Réinitialiser la progression pour cacher la barre
            }, 2000); // La barre sera visible pendant 2 secondes après avoir atteint 100%
          }
        },

      });
    }
  }

  signup(): void {
    this.router.navigate(['/admin']);
  }

  // Ajouter cette méthode pour vérifier si l'utilisateur est admin
  checkAdmin(): void {
    const currentUser = this.redalservice.getCurrentUser();
    if (currentUser && currentUser.role === 'Admin') {
      this.isAdmin = true;
    }
  }
  logout(){
    console.log('logout succes')
    this.redalservice.removeCurrentUser();
    this.redalservice.logout();
    this.router.navigate(['']);
  }
}
