import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'happy-feet',
    loadChildren: () => import('./filmes/happy-feet/happy-feet.module').then( m => m.HappyFeetPageModule)
  },
  {
    path: 'ta-dando-onda',
    loadChildren: () => import('./filmes/ta-dando-onda/ta-dando-onda.module').then( m => m.TaDandoOndaPageModule)
  },
  {
    path: 'enrolados',
    loadChildren: () => import('./filmes/enrolados/enrolados.module').then( m => m.EnroladosPageModule)
  },
  {
    path: 'lilo-stutch',
    loadChildren: () => import('./filmes/lilo-stutch/lilo-stutch.module').then( m => m.LiloStutchPageModule)
  },
  {
    path: 'madagascar',
    loadChildren: () => import('./filmes/madagascar/madagascar.module').then( m => m.MadagascarPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
