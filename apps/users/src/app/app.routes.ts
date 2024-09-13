import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: '',   redirectTo: 'landing', pathMatch: 'full' },
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
  {
    path: 'landing',
    loadComponent: () =>
      import('../pages/landing/landing.component').then((m) => m.LandingComponent),
   },
];
