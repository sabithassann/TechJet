import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../trending-products/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{
  productId!: number;
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    //private cartService: CartService
    
   
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = +params['id'];
      this.getProductDetails(this.productId);
    });
  }

  getProductDetails(productId: number): void {
    this.productService.getProduct(productId).subscribe((product: Product | undefined) => {
      this.product = product;
    });



  }

  // addToCart(quantity: number): void {
  //   if (this.product) {
  //     this.cartService.addToCart(this.product, quantity);
      
  //   }
  // }


}
