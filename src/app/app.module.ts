import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { CardComponent } from './components/card/card.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BigCardComponent,
    CardComponent,
    MenuBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
