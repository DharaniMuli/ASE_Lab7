import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatecustomerComponent } from './FrontEndComponents/createcustomer/createcustomer.component';
import { EditcustomerComponent } from './FrontEndComponents/editcustomer/editcustomer.component';



const routes: Routes = [

  {
    path: '', component: CreatecustomerComponent
  },
  {
    path: 'edit/:id', component: EditcustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
