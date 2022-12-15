import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


export class Motorbike {
 // _id: number =0;
  id: number = 0;
  brand: string ="";
  model: string ="";
  engine: string ="";
}

@Injectable({
  providedIn: 'root'
})
export class UserCrudService {

  endpoint = 'http://localhost:3000/motorbikes';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  createMotorbike(motorbike: Motorbike): Observable<any> {
    return this.httpClient.post<Motorbike>(this.endpoint, JSON.stringify(motorbike), this.httpOptions)
      .pipe(
        catchError(this.handleError<Motorbike>('Error occured'))
      );
  }

  getMotorbike(id:number): Observable<Motorbike[]> {
    return this.httpClient.get<Motorbike[]>(this.endpoint + '/' + id)
      .pipe(
        tap(_ => console.log(`User fetched: ${id}`)),
        catchError(this.handleError<Motorbike[]>(`Get user id=${id}`))
      );
  }

  getMotorbikes(): Observable<Motorbike[]> {
    return this.httpClient.get<Motorbike[]>(this.endpoint)
      .pipe(
        tap(users => console.log('Motorbikes retrieved!')),
        catchError(this.handleError<Motorbike[]>('Get motorbike', []))
      );
  }

  updateMotorbike(id:number, motorbike: Motorbike): Observable<any> {
    return this.httpClient.put(this.endpoint + '/' + id, JSON.stringify(motorbike), this.httpOptions)
      .pipe(
        tap(_ => console.log(`Motorbike updated: ${id}`)),
        catchError(this.handleError<Motorbike[]>('Update motorbike'))
      );
  }

  deleteMotorbike(id:number): Observable<Motorbike[]> {
    return this.httpClient.delete<Motorbike[]>(this.endpoint + '/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Motorbike deleted: ${id}`)),
        catchError(this.handleError<Motorbike[]>('Delete motorbiker'))
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }  

}
