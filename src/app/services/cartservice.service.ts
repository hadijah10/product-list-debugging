import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dessert } from '../../../public/datainterface';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  constructor(private http: HttpClient) {
  }
  getDesserts(): Observable<Dessert[]>{
    return this.http.get<Dessert[]>('data.json')
  }

}
