import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeRoutingModule } from './home/home-routing.module';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { PrivacidadComponent } from './privacidad/privacidad.component';


@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent, PrivacidadComponent,],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeRoutingModule,
    ButtonsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
