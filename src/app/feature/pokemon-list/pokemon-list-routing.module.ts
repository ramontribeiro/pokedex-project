import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './pokemon-list.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonListComponent,
    // canActivate: [AuthGuard],
    // resolve: { user : UserDetalheResolver },
    // canActivateChild: [CrudGuard],
    // children: [
    //   {
    //     path: '',
    //     redirectTo: 'home',
    //     pathMatch: 'full'
    //   },
    //   {
    //     path: 'home',
    //     component: HomeComponent,
    //     data: { acesso: 'USER'}
    //   },
    //   {
    //     path: 'list',
    //     component: ShoppingListComponent,
    //     data: { acesso: 'USER'}
    //   },
    //   {
    //     path: 'new',
    //     component: AddIngredientComponent,
    //     data: { acesso: 'USER'}
    //   },
    //   {
    //     path: 'edit'+ '/:id',
    //     component: EditIngredientComponent,
    //     data: { acesso: 'ADMIN'}
    //   },
    // ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonListRoutingModule {}
