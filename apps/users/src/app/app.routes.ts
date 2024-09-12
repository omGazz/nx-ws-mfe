import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full',
  },
  {
    path: 'users',
    loadComponent: () =>
      import('./app.component').then((m) => m.AppComponent),
   },
  {
    path: 'list',
    loadComponent: () =>
      import('../pages/list/list.component').then((m) => m.ListComponent),
   },
  {
    path: 'detail',
    loadComponent: () =>
      import('../pages/detail/detail.component').then((m) => m.DetailComponent),
  },
];
