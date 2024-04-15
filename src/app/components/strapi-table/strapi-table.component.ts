import { Component } from '@angular/core';
import { StrapitableService } from '../../services/strapitable.service';
import { MatDialog } from '@angular/material/dialog';
import { AddDataComponent } from './add-data/add-data.component';
import { UpdateDataComponent } from './update-data/update-data.component';
@Component({
  selector: 'app-strapi-table',
  templateUrl: './strapi-table.component.html',
  styleUrl: './strapi-table.component.css',
})
export class StrapiTableComponent {
  displayedColumns: string[] = ['id', 'fname', 'lname', 'email', 'actions'];
  data: any[] = [];

  constructor(
    private tableDataService: StrapitableService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.tableDataService.getData().subscribe((response: any) => {
      console.log(response);
      this.data = response;
    });
  }

  openCreateDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    const dialogRef = this.dialog.open(AddDataComponent, {
      height: '300px',
      width: '1100px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.addNewData(result);
        this.fetchData();
      }
    });
  }

  addNewData(newdata: any) {
    this.tableDataService.addData(newdata).subscribe();
  }

  deleteTableData(itemId: number): void {
    this.tableDataService.deleteData(itemId).subscribe(
      (res) => {
        console.log('Item deleted successfully:', res);
        this.fetchData();
      },
      (error) => {
        console.error('Error deleting item:', error);
      }
    );
  }

  openUpdateDialog(item: any): void {
    // console.log('Update item id:', item);
    const dialogRef = this.dialog.open(UpdateDataComponent, {
      width: '450px',
      data: { item },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const id = item.id;
        this.tableDataService.updateData(id, result).subscribe(
          (updatedData) => {
            console.log('Data updated successfully:', updatedData);
            this.fetchData();
          },
          (error) => {
            console.error('Failed to update data:', error);
          }
        );
      }
    });
  }
}
