import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogoComponent } from './shared/components/logo/logo.component';
import { ListeWookiesComponent } from './features/wookie/liste-wookies/liste-wookies.component';
import { LoggerService } from './shared/services/logger.service';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    ListeWookiesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    // LoggerService
    // useClass, useValue, useFactory ( à revoir, très important)
    // { provide: LoggerService, useClass: MonLoggerAMoi }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
