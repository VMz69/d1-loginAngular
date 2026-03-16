import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    //definiendo rutas con direccion de archivo, redireccionar hacia... y la coincidencia / archivo / componente
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: Login},
    { path: 'dashboard', component: Dashboard, canActivate: [authGuard]},
];
