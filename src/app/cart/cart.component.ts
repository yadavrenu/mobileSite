import { Component, OnInit } from '@angular/core';
import { Cartitems } from '../cartitems';
import { DataService } from '../data.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  display:Array<any>=[];

  displayEach(name){
  var index=0;
  

  }

  displayAll(){

    var text="<table class='table .table-stripped'><tr><th>&emsp;Name &emsp;</th><th>&emsp;Price&emsp;</th><th></th></tr>";
    this.cartItems.all.forEach(element1 => {
     console.log(element1);
     element1.forEach(item=>{
       this.display.push(item);
       text+="<tr><td>"+item.name+"</td><td>₹"+item.price+"</td><td><button class='.btn .btn-xs button' (click)='addToCart("+item.name+")' id="+item.name+">Add</button></td></tr>";
     })
    });
    text+="</table>";
    document.getElementById("right").innerHTML=text;
    }

  constructor(private cartItems:Cartitems, private data:DataService) {}
  // { 

  //   this.data.componentMethodCalled.subscribe(()=>{
  //     this.displayAll();
  //     alert("component called");
  //   }
  // );
  // }

  ngOnInit() {
    this.displayAll();
  }

}
