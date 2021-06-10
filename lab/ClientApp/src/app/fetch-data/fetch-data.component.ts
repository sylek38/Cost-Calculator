import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../interfaces/item';


@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public items: Item[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Item[]>(baseUrl + 'data').subscribe(result => {
      this.items = result;
    }, error => console.error(error));
    http.post<Item[]>(baseUrl + "data", {amount: 10, name: "name"});
  }
}

