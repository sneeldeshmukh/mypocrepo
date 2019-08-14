import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable, ErrorHandler } from '@angular/core';

import { AppRoutingModule, AlwaysAuthGuard, LoggedInAuthGuard } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormatFileSizePipe } from './format.file.size.pipe';
import { CustomDirectiveDirective } from './custom-directive.directive';
import { CustomValidatorComponent } from './custom-validator/custom-validator.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import * as Sentry from '@sentry/browser';

Sentry.init({
  dsn: 'https://90ec30b860d447e89beb906efa8d9f8a@sentry.io/1530492'
});

@Injectable()
export class SentryErrorHandler implements ErrorHandler {
  constructor() {}
  handleError(error) {
    const eventId = Sentry.captureException(error.originalError || error);
    Sentry.showReportDialog({ eventId });
  }
}

@NgModule({
  declarations: [
    AppComponent,
    FormatFileSizePipe,
    CustomDirectiveDirective,
    CustomValidatorComponent,
    TemplateDrivenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AlwaysAuthGuard, LoggedInAuthGuard, {provide: ErrorHandler, useClass: SentryErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
