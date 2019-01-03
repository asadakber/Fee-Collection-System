import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { AdminComponent } from './components/admin/admin.component'
import { AddComponent } from './components/add/add.component';
import { GetComponent } from './components/get/get.component'

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },

    {
        path: 'login',
        component: LoginComponent
    },
    
    {
        path: 'register',
        component: RegisterComponent
    },

    {
        path: 'dashboard',
        component: DashboardComponent
    },

    {
        path: 'admin',
        component: AdminComponent
    },

    {
        path: 'get',
        component: GetComponent
    },

    {
        path: 'add',
        component: AddComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}

