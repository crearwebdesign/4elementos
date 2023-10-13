import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { BreadcrumsComponent } from './shared/breadcrums/breadcrums.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';
import { RegisterComponent } from './registro/register/register.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { LibroComponent } from './pages/libro/libro.component';
import { ContactoComponent } from './pages/contacto/contacto.component';


@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,
    PrincipalComponent,
    BreadcrumsComponent,
    SidebarComponent,
    HeaderComponent,
    RegisterComponent,
    FooterComponent,
    AboutComponent,
    LibroComponent,
    ContactoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
