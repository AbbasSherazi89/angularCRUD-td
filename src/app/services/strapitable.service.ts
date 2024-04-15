import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StrapitableService {
  private apiUrl = 'http://localhost:1337/api';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/table-datas/getData`);
  }

  addData(newData: any): Observable<any> {
    const requestPayload = {
      data: {
        FirstName: newData.fname,
        LastName: newData.lname,
        Email: newData.email,
      },
    };
    return this.http.post<any>(
      `${this.apiUrl}/table-datas/addData`,
      requestPayload
    );
  }

  deleteData(itemId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/table-datas/${itemId}`);
  }

  updateData(id: number, newData: any): Observable<any> {
    console.log('New data:', newData);
    const itemData = newData.item;
    const requestPayload = {
      data: {
        FirstName: itemData.FirstName,
        LastName: itemData.LastName,
        Email: itemData.Email,
      },
    };
    // console.log('data in payload:', requestPayload);

    return this.http.put<any>(
      `${this.apiUrl}/table-datas/${id}`,
      requestPayload
    );
  }
}
