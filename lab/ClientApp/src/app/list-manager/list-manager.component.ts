import { Component, OnInit, Inject } from '@angular/core';
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
    private _appService: AppService,
    @Inject('BASE_URL') baseUrl: string) 
    { 
    // http.get<Item[]>(baseUrl + 'data').subscribe(result => {
    //   this.items = result;
    // }, error => console.error(error));
    // const body = JSON.stringify(this.items);
    // const headers = { 'content-type': 'application/json'} 
    // http.post(baseUrl + 'data', body, {'headers': headers})
    
    // {product: "lol", "price": 2, "amount: 2"});
  
  }

  sum: number;
  productName: string;
  productPrice: number;
  productAmount: number;
  
  public items: Item[] = [];

  ngOnInit(): void {
    this.refreshList()
  }

  refreshList(): void {
    // console.log("TU:", this._appService.baseUrl)
    this._appService.getFromList()
      .subscribe(result => {
        
        console.log(" getfromlist: ", result);
        this.items=result;
      })   
  }

  addToList(): void {
    this.items.push({
      productName: this.productName,
      productPrice: this.productPrice,
      productAmount: this.productAmount,
      
    });
    console.log(" addtolist : ", this.items);
    this._appService.addToList(this.items).subscribe( result => {
      // console.log(" addtolist : ", result);
      this.refreshList();
    })

    this.sum = this._calcService.count(this.items);
  
  }

}
