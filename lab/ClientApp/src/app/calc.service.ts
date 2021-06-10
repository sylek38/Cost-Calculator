import { Injectable } from '@angular/core';
import { Item } from './interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor() { }

  count(elementList: Item[]): number {
    let sum: number = 0;

    elementList.forEach(element => {
      sum += element['productPrice'] * element['productAmount'];
    })

    return sum;
    
  }
}
