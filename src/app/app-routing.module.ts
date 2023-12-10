import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./feature/pokemon-list/pokemon-list.module').then(
        (m) => m.PokemonListModule
      ),
    // canActivate:[AuthGuard],
    // data: { acesso: 'USER'}
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
