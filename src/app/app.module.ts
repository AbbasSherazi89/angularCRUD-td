import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TableComponent } from './components/table/table.component';
import { TreeComponent } from './components/tree/tree.component';
import { TreeNodeComponent } from './components/tree/tree-node/tree-node.component';
import { HeaderComponent } from './components/header/header.component';
import { UpdateComponent } from './components/table/update/update.component';
import { AddComponent } from './components/table/add/add.component';

@NgModule({
  declarations: [AppComponent, TableComponent, TreeComponent, TreeNodeComponent, HeaderComponent, UpdateComponent, AddComponent],
  imports: [BrowserModule, AppRoutingModule, MaterialModule],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
