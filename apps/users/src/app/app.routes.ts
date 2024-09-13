import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./app.component').then((m) => m.AppComponent),
    children:[
      // {
      //   path: '',
      //   loadComponent: () =>
      //     import('./app.component').then((m) => m.AppComponent),
      // },
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
    ],
    
   },

  // {
  //   path: 'users',
  //   //outlet: 'internal',
  //   loadComponent: () =>
  //     import('./app.component').then((m) => m.AppComponent),
  // },
  // {
  //   path: 'users/list',
  //   //outlet: 'internal',
  //   loadComponent: () =>
  //     import('../pages/list/list.component').then((m) => m.ListComponent),
  //  },
  // {
  //   path: 'users/detail',
  //   //outlet: 'internal',
  //   loadComponent: () =>
  //     import('../pages/detail/detail.component').then((m) => m.DetailComponent),
  // },
];
