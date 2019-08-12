import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, AlwaysAuthGuard, LoggedInAuthGuard } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormatFileSizePipe } from './format.file.size.pipe';
import { CustomDirectiveDirective } from './custom-directive.directive';
import { CustomValidatorComponent } from './custom-validator/custom-validator.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormatFileSizePipe,
    CustomDirectiveDirective,
    CustomValidatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [AlwaysAuthGuard, LoggedInAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
