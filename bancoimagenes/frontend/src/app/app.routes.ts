// app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login';
import { UploadFormComponent } from './upload/upload-form/upload-form';
import { ListadoComponent } from './galeria/listado/listado';
import { UsuariosComponent } from './admin/usuarios/usuarios';
import { AuthGuard } from './core/auth-guard';
import { RoleGuard } from './core/role-guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'upload',
    component: UploadFormComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['USUARIO', 'ADMIN'] }
  },
  {
    path: 'galeria',
    component: ListadoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    component: UsuariosComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['ADMIN'] }
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];
