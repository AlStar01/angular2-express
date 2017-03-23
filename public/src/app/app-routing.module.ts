import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules }  from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  { path: '',       component: HomeComponent },
  { path: 'about',  component: AboutComponent  },
  { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },
  { path: 'products', loadChildren: 'app/products/products.module#ProductsModule' },
  { path: '**', pathMatch: 'full', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
