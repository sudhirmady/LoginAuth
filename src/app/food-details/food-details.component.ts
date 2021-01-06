import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.css']
})
export class FoodDetailsComponent implements OnInit {

 customerName: string='Sravan Pitla';
 email: string='sravankumar.p@laalsa.com';
 mobile: number= 9032991329;
 address: string= '47, Lumbini Avenue, Gachibowli, Hyderabad, Telangana 500081, India';
 
 mobile1:number=9949749632;
 mobile2:string='9949749633,9949749634';
 email1:string='shirisha@gmail.com';
 address1:string='nallagandla,nallagandla,Hyderabad, Telangana, 500032, India';
 
 date:string='05/03/2020';
 item1:string='Egg Hong Kong Noodles';
 item2:String='Egg Schezwan Noodles';

 item1price:number=140.00;
 item2price:number=140.00;

 totalbill:number= this.item1price+this.item2price;







  constructor() { }

  ngOnInit(): void {
  }

}
