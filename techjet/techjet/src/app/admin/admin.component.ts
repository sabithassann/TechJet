import { Component } from '@angular/core';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {


  showBlog: boolean = false;
  showNews: boolean = false;
  showProduct: boolean = false;
  showModify:boolean=false;

  showBlogForm() {
    this.showBlog = !this.showBlog;
    this.showNews = false;
    this.showProduct = false;
    this.showModify = false;
  }

  showNewsForm() {
    this.showNews = !this.showNews;
    this.showBlog = false;
    this.showProduct = false;
    this.showModify = false;
  }

  showProductForm() {
    this.showProduct = !this.showProduct;
    this.showBlog = false;
    this.showNews = false;
    this.showModify = false;
  }

  showModifyForm(){

    this.showModify=!this.showModify;
    this.showBlog = false;
    this.showNews = false;
    this.showProduct = false;
   

  }
}
