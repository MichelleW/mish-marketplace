import { CartComponent } from './cart/cart.component';
import { DeleteComponent } from './delete/delete.component';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';
import { ListItemsComponent } from './list-items/list-items.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'listing', component: ListItemsComponent }, //read
  { path: 'listing/new', component: NewComponent }, //create
  { path: 'listing/edit/:id', component: EditComponent },//update
  { path: 'listing/:id', component: DetailsComponent }, //read
  { path: 'listing/delete', component: DeleteComponent }, //delete

  { path: 'listing/cart', component: CartComponent }, 
    {path:'listing',pathMatch:'full',component:AppComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
