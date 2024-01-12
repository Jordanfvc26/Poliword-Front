import { Routes } from '@angular/router';
import { LoginComponent } from './auth/modules/login/login.component';
import { RegisterComponent } from './auth/modules/register/register.component';
import { ForgotPasswordComponent } from './auth/modules/forgot-password/forgot-password.component';
import { TermsConditionsComponent } from './auth/modules/terms-conditions/terms-conditions.component';
import { DashboardComponent } from './shared-components/dashboard/dashboard.component';
import { ModulesComponent } from './student/components/learn/modules/modules.component';
import { PracticeOptionsComponent } from './student/components/practice/practice-options/practice-options.component';
import { PositionsTableComponent } from './student/components/positions/positions-table/positions-table.component';
import { MyClassComponent } from './student/components/classes/my-class/my-class.component';
import { ChatIaComponent } from './student/components/chat/chat-ia/chat-ia.component';

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
    {
        path: 'student',
        children: [
            {
                path: 'home', component: DashboardComponent,
                children: [
                    { path: 'learn/modules', component: ModulesComponent },
                    { path: 'practice/options', component: PracticeOptionsComponent },
                    { path: 'positions/positions-table', component: PositionsTableComponent },
                    { path: 'classes/my-class', component: MyClassComponent },
                    { path: 'chat-ia', component: ChatIaComponent },
                    // { path: 'help', component:  HelpComponent},
                    // { path: 'information', component: InformationComponent },
                    { path: '', redirectTo: 'learn/modules', pathMatch: 'full' },
                ],
            },
            { path: '', redirectTo: '/student/home/learn/modules', pathMatch: 'full' },
        ]
    },
];
