import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'uno', loadChildren: './uno/uno.module#UnoPageModule' },
  { path: 'varios', loadChildren: './varios/varios.module#VariosPageModule' },
  { path: 'dos', loadChildren: './dos/dos.module#DosPageModule' },
  { path: 'tres', loadChildren: './tres/tres.module#TresPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
