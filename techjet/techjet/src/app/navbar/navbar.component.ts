import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartsService } from '../services/carts.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  showDropdown: boolean = false;
  cartItemCount: number = 0;

constructor(
  private router:Router,
  public cartService: CartsService
  ){}
  
  ngOnInit() {
    this.cartService.cartItemsCount$.subscribe(count => {
      this.cartItemCount = count;
    });
  }



  onMouseEnter() {
   this.showDropdown = true;
 }

 onMouseLeave() {
   this.showDropdown = false;
 }

 goToLogin(){
  this.router.navigate(['/login']);
 }


 navigateToCategory(category: string) {
  this.router.navigate(['/products', category]);
}

}
