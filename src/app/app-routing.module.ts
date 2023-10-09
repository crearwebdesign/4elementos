import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { AboutComponent } from './pages/about/about.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { LibroComponent } from './pages/libro/libro.component';

const routes: Routes = [
  { path : 'home', component: PrincipalComponent},
  { path : 'about', component: AboutComponent},
  { path : 'libro', component: LibroComponent},
  { path : '', redirectTo: '/home', pathMatch : 'full'},
  { path : '**', component: NopagefoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
