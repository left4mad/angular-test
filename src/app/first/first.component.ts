import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {



  constructor() { }

  ngOnInit() {
  }

  // onStart() {
  //   setInterval( () => {this.nums.num1++; this.nums.num2 -= 2;}, 1000 )
  // }
  //
  // onIncrease(){
  //   this.nums.num1++;
  // }
  //
  // onDecrease(){
  //   this.nums.num2--;
  // }

}
