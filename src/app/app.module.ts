import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, AlwaysAuthGuard, LoggedInAuthGuard } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormatFileSizePipe } from './format.file.size.pipe';
import { CustomDirectiveDirective } from './custom-directive.directive';
import { CustomValidatorComponent } from './custom-validator/custom-validator.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

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
  providers: [AlwaysAuthGuard, LoggedInAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
