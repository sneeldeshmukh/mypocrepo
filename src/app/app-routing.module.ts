import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { CustomValidatorComponent } from './custom-validator/custom-validator.component';
import { UserService } from './services/user.service';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

export class AlwaysAuthGuard implements CanActivate {
  canActivate() {
    console.log('AlwaysAuthGuard');
    return true;
  }
}

@Injectable()
export class LoggedInAuthGuard implements CanActivate {
  constructor( private userService: UserService) {
  }
  canActivate() {
    if (this.userService.isLoggedIn()) {
      console.log('LoggedInAuthGuard');
      return true;
    } else {
      window.alert('You dont have permission to view this page');
      return false;
    }
}
}

const routes: Routes = [
  { path: '', component: CustomValidatorComponent, canActivate: [AlwaysAuthGuard, LoggedInAuthGuard] },
  { path: 'template', component: TemplateDrivenComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}


