import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { CartsService } from '../services/carts.service';

@Component({
  selector: 'app-productsdetails',
  templateUrl: './productsdetails.component.html',
  styleUrl: './productsdetails.component.css'
})
export class ProductsdetailsComponent implements OnInit{
  

  productId: string | null = null;
  product: any = {}; // Single product object

  selectedQuantity: number = 1;

  constructor(
    private route: ActivatedRoute,
    private firebaseService: FirebaseService,
    private cartService : CartsService
  ) {}


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productId = params['id'];
      if (this.productId) {
        this.loadProductDetails(this.productId);
      }
    });
  }

  loadProductDetails(productId: string) {
    this.firebaseService.getProductById(productId).subscribe(
      (data: any) => {
        console.log('Received product:', data);
        this.product = data;
      },
      (error: any) => {
        console.error('Error fetching product:', error);
        // Handle the error (e.g., display a message)
      }
    );
  }




  decreaseQuantity() {
    if (this.selectedQuantity > 1) {
      this.selectedQuantity--;
    }
  }

  // Method to increase quantity
  increaseQuantity() {
    // You can set a maximum limit if needed
    this.selectedQuantity++;
  }


  addToCart(product: any, quantity: number) {
    this.cartService.addToCart(product, quantity);
  }
}
