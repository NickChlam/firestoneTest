import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent} from './app/user-profile/user-profile.component';
import {AuthGuard} from './app/core/auth.guard';

export const router: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'user-profile', component: UserProfileComponent, canActivate: [AuthGuard] }

]

export const routes : ModuleWithProviders = RouterModule.forRoot(router);