import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPageComponent } from './search-page/search-page.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReegistreComponent } from './reegistre/reegistre.component';
import { CarteComponent } from './carte/carte.component';
import { AgdalComponent } from './agdal/agdal.component';
import { TouargaComponent } from './touarga/touarga.component';
import { YaacoubComponent } from './yaacoub/yaacoub.component';
import { YoussoufiaComponent } from './youssoufia/youssoufia.component';
import { HassanComponent } from './hassan/hassan.component';
import { AdminComponent } from './admin/admin.component';
import { UserregistreComponent } from './userregistre/userregistre.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthGuard } from './auth.guard';
import { SaaleComponent } from './saale/saale.component';
import { TabriquetComponent } from './tabriquet/tabriquet.component';
import { HsaineComponent } from './hsaine/hsaine.component';
import { BouknadelComponent } from './bouknadel/bouknadel.component';
import { LaayaydaComponent } from './laayayda/laayayda.component';
import { BettanaComponent } from './bettana/bettana.component';
import { BabMrissaComponent } from './bab-mrissa/bab-mrissa.component';
import { TemaraComponent } from './temara/temara.component';
import { SidiYahyaZairComponent } from './sidi-yahya-zair/sidi-yahya-zair.component';
import { AinAtigComponent } from './ain-atig/ain-atig.component';
import { MunicipaliteDeTemaraComponent } from './municipalite-de-temara/municipalite-de-temara.component';
import { SkhiratComponent } from './skhirat/skhirat.component';


const routes: Routes = [
  { path: 'sidi_yahya_Zair', component: SidiYahyaZairComponent , canActivate: [AuthGuard]},

  { path: 'Ain_Atig', component: AinAtigComponent , canActivate: [AuthGuard]},
  { path: 'Municipalite_de_Temara', component: MunicipaliteDeTemaraComponent , canActivate: [AuthGuard]},
  { path: 'skhirat', component: SkhiratComponent , canActivate: [AuthGuard]},

  { path: 'temara', component: TemaraComponent , canActivate: [AuthGuard]},
  { path: 'sale', component: SaaleComponent , canActivate: [AuthGuard]},
  { path: 'tabriqet', component: TabriquetComponent , canActivate: [AuthGuard]},
  { path: 'hsaine', component: HsaineComponent , canActivate: [AuthGuard]},
  { path: 'bouknadel', component: BouknadelComponent , canActivate: [AuthGuard]},
  { path: 'Laayayda', component: LaayaydaComponent , canActivate: [AuthGuard]},
  { path: 'bettana', component: BettanaComponent , canActivate: [AuthGuard]},
  { path: 'mrissa', component: BabMrissaComponent , canActivate: [AuthGuard]},
  { path: 'navbar', component: NavbarComponent, canActivate: [AuthGuard] },
  { path: 'search', component: SearchPageComponent , canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: '', component: UserLoginComponent },
  { path: 'user-registre', component: UserregistreComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'registre', component: ReegistreComponent, canActivate: [AuthGuard] },
  { path: 'carte', component: CarteComponent, canActivate: [AuthGuard] },
  { path: 'Agdal', component: AgdalComponent , canActivate: [AuthGuard]},
  { path: 'Touarga', component: TouargaComponent, canActivate: [AuthGuard] },
  { path: 'Yaacoub', component: YaacoubComponent , canActivate: [AuthGuard]},
  { path: 'youssoufia', component: YoussoufiaComponent , canActivate: [AuthGuard]},
  { path: 'Hassan', component: HassanComponent , canActivate: [AuthGuard]},
  { path: 'admin', component: AdminComponent , canActivate: [AuthGuard]},







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
