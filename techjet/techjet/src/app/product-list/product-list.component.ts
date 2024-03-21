import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{



  category: string | null = null;
  products: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private firebaseService: FirebaseService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.category = params['category'];
      if (this.category) {
        this.loadProductsByCategory(this.category);
      }
    });
  }

  loadProductsByCategory(category: string) {
    this.firebaseService.getProductsByCategory(category).subscribe((data: any[]) => {
      this.products = data;
    });
  }

  buyNow(productId: string) {
    console.log('Product ID:', productId); // Check if the function gets called and receives the product ID
    this.router.navigate(['/productss', productId]); // Check if this navigation is properly executed
  }

}
