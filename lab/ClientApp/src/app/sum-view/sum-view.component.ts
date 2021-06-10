import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sum-view',
  templateUrl: './sum-view.component.html',
  styleUrls: ['./sum-view.component.css']
})
export class SumViewComponent implements OnInit {

  @Input() sum: number;

  constructor() { }

  ngOnInit() {
  }

}
