import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TableComponent } from './components/table/table.component';
import { TreeComponent } from './components/tree/tree.component';
import { HeaderComponent } from './components/header/header.component';
import { UpdateComponent } from './components/table/update/update.component';
import { AddComponent } from './components/table/add/add.component';
import { AddNodeComponent } from './components/tree/add-node/add-node.component';
import { EditNodeComponent } from './components/tree/edit-node/edit-node.component';
import { AddChildNodeComponent } from './components/tree/add-child-node/add-child-node.component';
import { MoveNodeComponent } from './components/tree/move-node/move-node.component';
import { TreenodeComponent } from './components/treenode/treenode.component';
import { HttpClientModule } from '@angular/common/http';
import { CreatenodeComponent } from './components/treenode/createnode/createnode.component';
import { MovenodeComponent } from './components/treenode/movenode/movenode.component';
import { StrapiTableComponent } from './components/strapi-table/strapi-table.component';
import { AddDataComponent } from './components/strapi-table/add-data/add-data.component';
import { UpdateDataComponent } from './components/strapi-table/update-data/update-data.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TreeComponent,
    HeaderComponent,
    UpdateComponent,
    AddComponent,
    AddNodeComponent,
    EditNodeComponent,
    AddChildNodeComponent,
    MoveNodeComponent,
    TreenodeComponent,
    CreatenodeComponent,
    MovenodeComponent,
    StrapiTableComponent,
    AddDataComponent,
    UpdateDataComponent
  ],
  imports: [BrowserModule, AppRoutingModule, MaterialModule, HttpClientModule],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
