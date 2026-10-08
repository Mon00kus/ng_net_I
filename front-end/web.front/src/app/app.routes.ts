import { Routes } from '@angular/router';
import { Landing } from './landing/landing';
import { IndiceProductos } from './indice-productos/indice-productos';

export const routes: Routes = [
  {path: '', component: Landing},
  {path:'Products', component:IndiceProductos}
];