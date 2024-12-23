import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'wish-list',
    loadComponent: () =>
      import('./wish-list/wish-list.component').then(
        (m) => m.WishListComponent
      ),
  },
];
