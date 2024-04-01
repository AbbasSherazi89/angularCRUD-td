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

@NgModule({
  declarations: [AppComponent, TableComponent, TreeComponent, HeaderComponent, UpdateComponent, AddComponent, AddNodeComponent, EditNodeComponent, AddChildNodeComponent, MoveNodeComponent],
  imports: [BrowserModule, AppRoutingModule, MaterialModule],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
