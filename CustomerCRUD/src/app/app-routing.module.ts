import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatecustomerComponent } from './FrontEndComponents/createcustomer/createcustomer.component';
import { EditcustomerComponent } from './FrontEndComponents/editcustomer/editcustomer.component';
import { DeletecustomerComponent } from './FrontEndComponents/deletecustomer/deletecustomer.component';
import { GetcustomerComponent } from './FrontEndComponents/getcustomer/getcustomer.component';




const routes: Routes = [

  {
    path: '', component: CreatecustomerComponent
  },
  {
    path: 'editcustomer', component: EditcustomerComponent
  },
  {
    path: 'deletecustomer', component: DeletecustomerComponent
  },
  {
    path: 'getcustomer', component: GetcustomerComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
