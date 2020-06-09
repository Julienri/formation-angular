import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogoComponent } from './shared/components/logo/logo.component';
import { ListeWookiesComponent } from './features/wookie/liste-wookies/liste-wookies.component';
import { LoggerService } from './shared/services/logger.service';
import { HttpClientModule } from '@angular/common/http';
import { TestTdfComponent } from './test-tdf/test-tdf.component';
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    ListeWookiesComponent,
    TestTdfComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    // LoggerService
    // useClass, useValue, useFactory ( à revoir, très important)
    // { provide: LoggerService, useClass: MonLoggerAMoi }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
