import { Component,inject,Input } from '@angular/core';
import { Dessert } from '../../../../public/datainterface';
import { CartserviceService } from '../../services/cartservice.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrl: './add-to-cart.component.scss'
})

export class AddToCartComponent {
  isAddedToCart = false;
  quantity = 1;
  cartservice = inject(CartserviceService)
  @Input() dessert!:Dessert

  constructor(){
  this.cartservice.cartItemsSub.subscribe(data => 
  {
  
  }
  )
  }
 

  addToCart() {
    this.isAddedToCart = true;
    this.cartservice.addToCart({name:this.dessert.name,quantity:1,price:this.dessert.price})
  }

  decreaseProductItem() {
    if (this.quantity <= 1) {
      this.isAddedToCart = false;
      this.cartservice.removeDessertFromCart(this.dessert.name)
      return
    }
    this.quantity--;
    this.cartservice.decreaseQuantity(this.dessert.name)
  }

  increaseProductItem() {
    ++this.quantity;
    this.cartservice.increaseQuantity(this.dessert.name)
  }

};
