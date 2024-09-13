import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  // {
  //   path: '',  // Home del microfrontend
  //   redirectTo: 'users',
  //   pathMatch: 'full',
  // },
  // {
  //   path: 'users',
  //   children:[
  //     {
  //       path: '',
  //       outlet: 'internal',
  //       loadComponent: () =>
  //         import('./app.component').then((m) => m.AppComponent),
  //     },
  //     {
  //       path: 'list',
  //       outlet: 'internal',
  //       loadComponent: () =>
  //         import('../pages/list/list.component').then((m) => m.ListComponent),
  //      },
  //     {
  //       path: 'detail',
  //       outlet: 'internal',
  //       loadComponent: () =>
  //         import('../pages/detail/detail.component').then((m) => m.DetailComponent),
  //     },
  //   ],
    
  //  },

  // {
  //   path: 'users',
  //   //outlet: 'internal',
  //   loadComponent: () =>
  //     import('./app.component').then((m) => m.AppComponent),
  // },
    {
    path: '',  // Home del microfrontend
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    outlet: 'internal',
    loadComponent: () =>
      import('../pages/list/list.component').then((m) => m.ListComponent),
   },
  {
    path: 'detail',
    outlet: 'internal',
    loadComponent: () =>
      import('../pages/detail/detail.component').then((m) => m.DetailComponent),
  },
];
