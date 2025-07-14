import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: ()=> import('./auth/auth.routes').then((m) => m.AUTH_ROUTES),
  },
  {
    path: 'notes',
    loadChildren: () => import('./notes/notes.routes').then((m) => m.NOTES_ROUTES),
  },

  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
];
