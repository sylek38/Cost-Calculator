import { Injectable, Inject } from '@angular/core';
import { Item } from './interfaces/item';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient,  @Inject('BASE_URL') public baseUrl: string) { }

  getFromList(): Observable<Item[]> {
    return this.http.get<Item[]>(this.baseUrl + 'data')
  }

  addToList(items: Item[]): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(items[items.length-1]);
    console.log(body)

    return this.http.post(this.baseUrl + 'data', body, {'headers': headers})
  }

  

}
