import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { TreeComponent } from './components/tree/tree.component';
import { TreenodeComponent } from './components/treenode/treenode.component';
const routes: Routes = [
  {path:'table', component:TableComponent},
  {path:'tree', component:TreeComponent},
  {path:'treenode', component:TreenodeComponent},
  {path:'', redirectTo:'/table', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
