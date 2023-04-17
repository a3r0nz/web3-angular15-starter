import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
  { path: 'pages', loadChildren: () => import('./pages/extrapages/extrapages.module').then(m => m.ExtrapagesModule)  },
  {
    path: '**',
    redirectTo: '/pages/404' // Error 404 - Page not found
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
