import { Component } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrl: './modify.component.css'
})
export class ModifyComponent {


  searchModel: string = ''; // Holds the model number entered by the user
  retrievedProduct: any = null; // Holds the retrieved product data

  constructor(private firebaseService: FirebaseService) {}

  onSearch() {
    if (this.searchModel.trim() === '') {
      console.error('Please enter a model number');
      return;
    }

    this.firebaseService.getProductsByModel(this.searchModel)
      .subscribe((products: any[]) => {
        if (products.length > 0) {
          // If a product is found, update retrievedProduct to display in the template
          this.retrievedProduct = products[0]; // Assuming the model number is unique
        } else {
          // If no product is found, reset retrievedProduct
          this.retrievedProduct = null;
          console.log('No product found with this model number');
          // Optionally, display a message to the user
        }
      });
  }

  onDelete() {
    if (!this.retrievedProduct) {
      console.error('No product to delete');
      return;
    }

    const modelToDelete = this.retrievedProduct.model;
    this.firebaseService.deleteProductByModel(modelToDelete)
      .then(() => {
        console.log('Product deleted successfully');
        this.retrievedProduct = null; // Reset retrieved product after deletion
      })
      .catch((error) => {
        console.error('Error deleting product:', error);
      });
  }

  onUpdate() {
    // Implement update logic based on your requirements
    // You can call a modal or another form to update the product details
    console.log('Update functionality to be implemented');
  }




  //for modify news


  startDate: Date | null = null;
  endDate: Date | null = null;
  newsArticles: any[] = [];


  searchNewsByDateRange() {
    if (this.startDate && this.endDate) {
      // Assuming you have a function to format the dates for Firestore query
      const formattedStartDate = this.formatDate(this.startDate);
      const formattedEndDate = this.formatDate(this.endDate);

      this.fetchNewsByDateRange(formattedStartDate, formattedEndDate);
    }
  }

  fetchNewsByDateRange(start: string, end: string) {
    this.firebaseService.getNewsByDateRange(start, end)
      .subscribe(
        (news: any[]) => {
          this.newsArticles = news;
          console.log('Fetched Articles:', this.newsArticles);
        },
        (error) => {
          console.error('Error fetching news:', error);
        }
      );
  }

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, '0');
    const day = `${date.getDate()}`.padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  


  onDeleteArticle(articleId: string) {
    this.firebaseService.deleteNews(articleId)
      .then(() => {
        // After deletion, you might want to refresh the articles
        this.searchNewsByDateRange();
      })
      .catch((error) => {
        console.error('Error deleting article:', error);
        // Handle error cases
      });
  }

  
  onUpdateArticle(articleId: string) {
    // Implement the logic to update the article (e.g., navigate to an update page)
    // This method should handle updating the article based on your application's design and flow
  }
}
