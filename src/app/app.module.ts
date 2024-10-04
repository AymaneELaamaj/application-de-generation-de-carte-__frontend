import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Ajoutez cette ligne
import { AppComponent } from './app.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { ReegistreComponent } from './reegistre/reegistre.component';
import { CarteComponent } from './carte/carte.component';
import { HttpClientModule } from '@angular/common/http';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { YoussoufiaComponent } from './youssoufia/youssoufia.component';
import { HassanComponent } from './hassan/hassan.component';
import { AgdalComponent } from './agdal/agdal.component';
import { TouargaComponent } from './touarga/touarga.component';
import { YaacoubComponent } from './yaacoub/yaacoub.component';
import { FichierComponent } from './fichier/fichier.component';
import { AdminComponent } from './admin/admin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserregistreComponent } from './userregistre/userregistre.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { NavSaleComponent } from './nav-sale/nav-sale.component';
import { HsaineComponent } from './hsaine/hsaine.component';
import { BouknadelComponent } from './bouknadel/bouknadel.component';
import { TabriquetComponent } from './tabriquet/tabriquet.component';
import { SaaleComponent } from './saale/saale.component';
import { LaayaydaComponent } from './laayayda/laayayda.component';
import { BettanaComponent } from './bettana/bettana.component';
import { BabMrissaComponent } from './bab-mrissa/bab-mrissa.component';
import { TemaraComponent } from './temara/temara.component';
import { NavTemaraComponent } from './nav-temara/nav-temara.component';
import { SidiYahyaZairComponent } from './sidi-yahya-zair/sidi-yahya-zair.component';
import { AinAtigComponent } from './ain-atig/ain-atig.component';
import { MunicipaliteDeTemaraComponent } from './municipalite-de-temara/municipalite-de-temara.component';
import { SkhiratComponent } from './skhirat/skhirat.component';


@NgModule({
  declarations: [
    UserLoginComponent,
    NavbarComponent,
    AppComponent,
    SearchPageComponent,
    HomeComponent,
    LoginComponent,
    ReegistreComponent,
    CarteComponent,
    YoussoufiaComponent,
    HassanComponent,
    AgdalComponent,
    TouargaComponent,
    YaacoubComponent,
    FichierComponent,
    AdminComponent,
    UserregistreComponent,
    NavSaleComponent,
    HsaineComponent,
    BouknadelComponent,
    TabriquetComponent,
    SaaleComponent,
    LaayaydaComponent,
    BettanaComponent,
    BabMrissaComponent,
    TemaraComponent,
    NavTemaraComponent,
    SidiYahyaZairComponent,
    AinAtigComponent,
    MunicipaliteDeTemaraComponent,
    SkhiratComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
