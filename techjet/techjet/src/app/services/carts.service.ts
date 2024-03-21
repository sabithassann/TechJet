import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  cartItems: any[] = []; // Array to store cart items
  cartItemsCount$ = new BehaviorSubject<number>(0); // BehaviorSubject to track cart items count

  // addToCart(product: any, quantity: number) {
  //   const existingItem = this.cartItems.find(item => item.name === product.name);
  
  //   if (existingItem) {
  //     existingItem.quantity += quantity;
  //     existingItem.price = existingItem.quantity * product.price; // Update total price
  //   } else {
  //     const cartItem = {
  //       name: product.name,
  //       quantity: quantity,
  //       price: quantity * product.price // Calculate total price
  //     };
  //     this.cartItems.push(cartItem);
  //   }
  
  //   console.log(`Added to cart - Quantity: ${quantity} - Price: ${product.price}`);
  // }




  //for perform cart
  addToCart(product: any, quantity: number) {
    const existingItem = this.cartItems.find(item => item.name === product.name);
  
    if (existingItem) {
      existingItem.quantity += quantity;
      existingItem.price = existingItem.quantity * product.price; // Update total price
    } else {
      const cartItem = {
        name: product.name,
        quantity: quantity,
        price: quantity * product.price, // Calculate total price
        imageUrl: product.imageUrl // Add imageUrl property
      };
      this.cartItems.push(cartItem);
    }
  
    console.log(`Added to cart - Quantity: ${quantity} - Price: ${product.price}`);
  }

  getCartItems() {
    return this.cartItems; // Return the current cart items
  }

  removeFromCart(item: any) {
    const index = this.cartItems.findIndex(cartItem => cartItem.id === item.id);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      this.cartItemsCount$.next(this.cartItems.length);
      localStorage.setItem('cart', JSON.stringify(this.cartItems));
    }
  }
}
