import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, CanActivate} from '@angular/router';
import { UserProfileComponent} from '../app/user-profile/user-profile.component';
import {AuthGuard} from '../app/core/auth.guard';
import { GmailLoginComponent } from './gmail-login/gmail-login.component';

export const router: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'user-profile', component: UserProfileComponent, canActivate: [AuthGuard]},
    {path: 'email', component: GmailLoginComponent}

]

export const routes : ModuleWithProviders = RouterModule.forRoot(router);