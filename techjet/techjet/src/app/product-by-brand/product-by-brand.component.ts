import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-product-by-brand',
  templateUrl: './product-by-brand.component.html',
  styleUrl: './product-by-brand.component.css'
})
export class ProductByBrandComponent implements OnInit{
  brand: string = ''; // This will store the selected brand
  products: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private firebaseService: FirebaseService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.brand = params['brand']; // Assuming you have a route parameter for brand
      this.loadProductsByBrand(this.brand);
    });
  }

  loadProductsByBrand(brand: string) {
    this.firebaseService.getProductsByBrand(brand).subscribe(data => {
      this.products = data;
    });
  }

}
