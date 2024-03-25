import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { TreeComponent } from './components/tree/tree.component';
const routes: Routes = [
  {path:'table', component:TableComponent},
  {path:'tree', component:TreeComponent},
  {path:'', redirectTo:'/table', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
