import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogoComponent } from './shared/components/logo/logo.component';
import { ListeWookiesComponent } from './features/wookie/liste-wookies/liste-wookies.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    ListeWookiesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
