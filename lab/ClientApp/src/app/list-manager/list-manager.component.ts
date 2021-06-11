import { Component, OnInit } from '@angular/core';
import { Item } from '../interfaces/item';
import { CalcService } from '../calc.service';
import { AppService } from '../app.service';

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {

  constructor(
    private _calcService: CalcService,
    private _appService: AppService
    ) { }

  sum: number;
  productName: string;
  productPrice: number;
  productAmount: number;
  
  public items: Item[] = [];

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList(): void {
    this._appService.getFromList()
      .subscribe(result => {
        this.items=result;
      })   
  }

  addToList(): void {
    this.items.push({
      productName: this.productName,
      productPrice: this.productPrice,
      productAmount: this.productAmount,
    });

    this._appService.addToList(this.items).subscribe( result => {
      this.refreshList();
    })

    this.sum = this._calcService.count(this.items);
  }
}
