import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroInfosComponent } from './components/hero-infos/hero-infos.component';
import { ChoicesOptionsComponent } from './components/choices-options/choices-options.component';
import { RollButtonComponent } from './components/roll-button/roll-button.component';
import { FightButtonComponent } from './components/fight-button/fight-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { PopUpComponent } from './components/pop-up/pop-up.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroInfosComponent,
    ChoicesOptionsComponent,
    RollButtonComponent,
    FightButtonComponent,
    PopUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
