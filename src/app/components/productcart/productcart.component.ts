import { Component,inject } from '@angular/core';
import { CartserviceService } from '../../services/cartservice.service';
import { DessertCardDetals } from '../../../../public/dessertcartdetails';

@Component({
  selector: 'app-productcart',
  imports: [],
  templateUrl: './productcart.component.html',
  styleUrl: './productcart.component.scss',
})
export class ProductcartComponent {

 productdata:DessertCardDetals[] = []

  constructor(private cartservice:CartserviceService){
    this.cartservice.cartItemsSub.subscribe(data => {
      this.productdata = data
 })
  }

 removeDessert(dessertname:string){
 this.cartservice.removeDessertFromCart(dessertname)
 }


}
