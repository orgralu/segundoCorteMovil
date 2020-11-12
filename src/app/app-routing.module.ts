import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    //redirectTo: 'folder/Inbox',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./inicio/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./inicio/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'usuario',
    loadChildren: () => import('./pages/usuario/usuario.module').then( m => m.UsuarioPageModule)
  },
  {
    path: 'add-encargo',
    loadChildren: () => import('./pages/add-encargo/add-encargo.module').then( m => m.AddEncargoPageModule)
  },
  {
    path: 'act-encargo/:id',
    loadChildren: () => import('./pages/act-encargo/act-encargo.module').then( m => m.ActEncargoPageModule)
  },
  {
    path: 'act-encargo',
    loadChildren: () => import('./pages/act-encargo/act-encargo.module').then( m => m.ActEncargoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
