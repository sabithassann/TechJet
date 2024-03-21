import { Component, OnInit } from '@angular/core';
import { CartsService } from '../services/carts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  cartItems: any[] = []; // Array to store cart items

  constructor
  (private cartService: CartsService,
   private router: Router) {
    this.cartItems = this.cartService.getCartItems(); // Retrieve cart items from the service
  }



  calculateTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }


  // removeFromCart(index: number) {
  //   this.cartItems.splice(index, 1);
  // }

  removeFromCart(item: any) {
    this.cartService.removeFromCart(item);
    this.cartItems = this.cartService.getCartItems(); // Update cart items after removal
  }


  makePayment() {
    this.router.navigate(['/login']);
  }
}
