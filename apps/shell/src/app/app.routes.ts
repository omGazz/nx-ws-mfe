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
  /**this app is external from this monorepo */
  {
    path: '',
    outlet: 'external-app',
    loadComponent: () =>
      loadRemoteModule('external-mfe', './Component').then((m) => m.AppComponent)
    .catch(() => {
      console.error('Error loading remote module: external-mfe');
      return import('../components/error/error.component').then((m) => m.ErrorComponent);
    }),
  },
];
