import { loadRemoteModule } from '@angular-architects/native-federation';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    outlet: 'header',
    loadComponent: () =>
      loadRemoteModule('mfe1', './Component').then((m) => m.AppComponent),
  },
  {
    path: '',
    outlet: 'sidebar',
    loadComponent: () =>
      loadRemoteModule('mfe2', './Component').then((m) => m.AppComponent),
  },
  {
    path: '',
    outlet: 'footer',
    loadComponent: () =>
      loadRemoteModule('mfe3', './Component').then((m) => m.AppComponent),
  },
  {
    path: '',
    loadChildren: () =>
      loadRemoteModule('users', './routes').then((m) => m.appRoutes),
  },
  // {
  //   path: '',
  //   loadComponent: () =>
  //     loadRemoteModule('users', './Component').then((m) => m.AppComponent),
  // },
    // {
    //   path: 'users',
    //   //outlet: 'content',
    //   loadComponent: () =>
    //     loadRemoteModule('users', './Component').then((m) => m.AppComponent),
    // },
    // {
    //   path: '**',  // Fallback route per qualsiasi altro percorso
    //   redirectTo: 'users'
    // },
];
