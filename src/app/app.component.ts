import { Component } from '@angular/core';
// import { element } from '@angular/core/src/render3/instructions';
import { ViewEncapsulation } from '@angular/core';
import { Cartitems } from './cartitems';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent {
  title = 'msite';

  constructor(private cartItems:Cartitems){

  }
display:Array<any>=[];

displayAll(){

var text="<table><tr><th>Name of Item &emsp;&emsp;</th><th>Price&emsp;&emsp;</th><th>Category&emsp;</th><th></th></tr>";
this.cartItems.all.forEach(element1 => {
 console.log(element1);
 element1.forEach(item=>{
   this.display.push(item);
   text+="<tr><td>"+item.name+"</td><td>"+item.price+"</td><td>"+item.clas+"<td><input type='button' value='Add to Cart' class='button' id="+item.name+"></td></tr>";
 })
});
text+="</table>";
document.getElementById("right").innerHTML=text;
}

openNav(){
  document.getElementById("mySidenav").style.width = "20%";
  document.getElementById("main").style.marginLeft = "20%";
  // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
closeNav(){
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  // document.body.style.backgroundColor = "white";

}
ngOnInit(){

  this.displayAll();
}
}
