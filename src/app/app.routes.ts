import { Routes } from '@angular/router';
import { LoginComponent } from './auth/modules/login/login.component';
import { RegisterComponent } from './auth/modules/register/register.component';
import { ForgotPasswordComponent } from './auth/modules/forgot-password/forgot-password.component';
import { TermsConditionsComponent } from './auth/modules/terms-conditions/terms-conditions.component';

export const routes: Routes = [
    { path: '', redirectTo: 'auth', pathMatch: 'full' },
    { 
        path: 'auth',
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
            { path: 'forgot-password', component: ForgotPasswordComponent },
            { path: 'terms-conditions', component: TermsConditionsComponent },
            { path: '', redirectTo: 'login', pathMatch: 'full' },
        ]
    },
    // { 
    //     path: 'student',
    //     children: [
    //         { path: 'probando', component: ProbandoComponent },
    //         { path: '', redirectTo: 'probando', pathMatch: 'full' },
    //     ]
    // },
];
