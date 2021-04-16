import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { SobremiComponent } from './components/sobremi/sobremi.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { BannerComponent } from './components/shared/banner/banner.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NofoundComponent } from './components/nofound/nofound.component';
import { IndexComponent } from './components/index/index.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoadingComponent,
    SobremiComponent,
    PortafolioComponent,
    FooterComponent,
    BannerComponent,
    ProyectosComponent,
    ContactoComponent,
    NofoundComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
