import { loadRemoteModule } from '@angular-architects/native-federation';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'users', // Redirige alla route 'users' di default
    pathMatch: 'full',
  },
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
  // this will load the users app in the primary outlet
  // {
  //   path: '',
  //   outlet: 'content',
  //   loadComponent: () =>
  //     loadRemoteModule('users', './Component').then((m) => m.AppComponent),
  // },
    // Route per caricare il microfrontend users nel primary outlet

    {
      path: 'users',
      //outlet: 'content',
      loadChildren: () =>
        loadRemoteModule('users', './routes').then((m) => m.appRoutes),
    },
    // Route per gestire l'interno del microfrontend
];
