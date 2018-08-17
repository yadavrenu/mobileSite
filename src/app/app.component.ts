import { Component } from '@angular/core';
// import { element } from '@angular/core/src/render3/instructions';
import { ViewEncapsulation } from '@angular/core';
import { Cartitems } from './cartitems';
import { DataService } from './data.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent {
  title = 'msite';

  constructor(private cartItems:Cartitems, 
              private data: DataService){

  }

displayAll(){
  this.data.callComponentMethod();
}
// displayAll(){

// var text="<table  align='center'><tr><th>&emsp;&emsp;Name &emsp;&emsp;</th><th>&emsp;&emsp;Price&emsp;&emsp;</th><<th></th></tr>";
// this.cartItems.all.forEach(element1 => {
//  console.log(element1);
//  element1.forEach(item=>{
//    this.display.push(item);
//    text+="<tr><td>"+item.name+"</td><td>₹"+item.price+"</td><td><button class='.btn .btn-xs button' (click)='addToCart("+item.name+")' id="+item.name+">Add</button></td></tr>";
//  })
// });
// text+="</table>";
// document.getElementById("right").innerHTML=text;
// }

openNav(){
  document.getElementById("mySidenav").style.width = "40%";
  document.getElementById("main").style.marginLeft = "40%";
  // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
closeNav(){
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";

}
// $(document).click((e)=>{
//   if(e.target.id == "test"){
//     e.preventDefault();      
//     e.stopPropagation();   
//   }
//   else{
//      //your function call that you want to invoke on clicking anywhere outside of div _test_
//   } 
// });
ngOnInit(){
// this.displayAll();
}
}
