import { Component } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {

  // productName: string = '';
  // productCategory: string = '';
  // productImage: File | null = null;


  productName: string = '';
  productCategory: string = '';
  productImage: File | null = null;
  model: string = '';
  display: string = '';
  processor: string = '';
  RAM: string = '';
  feature: string = '';
  price: number | null = null;
  brand: string = '';

  submissionError: string | null = null;
  isLoading: boolean = false;



  constructor(private firebaseService: FirebaseService){}



  // onFileSelected(event: any) {
  //   // Handle file input change and store the selected file
  //   this.productImage = event.target.files[0];
  // }

  onFileSelected(event: any) {
    // Handle file input change and store the selected file
    this.productImage = event.target.files[0];
  }

  // onSubmit() {
  //   if (!this.productImage) {
  //     console.error('No image selected!');
  //     return;
  //   }

  onSubmit() {
    this.submissionError = null; // Resetting previous errors
    if (
      !this.productImage ||
      !this.productName ||
      !this.productCategory ||
      !this.model ||
      !this.display ||
      !this.processor ||
      !this.RAM ||
      !this.feature
      
      
    ) {
      console.error('Please fill all the required fields and select an image!');
      return;
    }

    this.isLoading = true; // Show loading spinner or indicator

    this.firebaseService.uploadImage(this.productImage)
      .then((imageUrl: string | null) => {
        if (imageUrl) {
          this.firebaseService.saveProduct(
            {
              name: this.productName,
              category: this.productCategory,
              model: this.model,
              display: this.display,
              processor: this.processor,
              RAM: this.RAM,
              feature: this.feature,
              price: this.price,
              brand: this.brand
              // Add other product details...
            },
            imageUrl
          )
            .then(() => {
              console.log('Product saved successfully!');
              this.isLoading = false;
              this.resetForm();
              // Show success message to the user
            })
            .catch((error) => {
              console.error('Error saving product: ', error);
              this.submissionError = 'Failed to save the product. Please try again.';
              this.isLoading = false;
            });
        } else {
          console.error('Failed to upload image.');
          this.submissionError = 'Failed to upload the image. Please try again.';
          this.isLoading = false;
        }
      })
      .catch((error) => {
        console.error('Error uploading image: ', error);
        this.submissionError = 'Failed to upload the image. Please try again.';
        this.isLoading = false;
      });
  }

  resetForm() {
    this.productName = '';
    this.productCategory = '';
    this.productImage = null;
    this.model = '';
    this.display = '';
    this.processor = '';
    this.RAM = '';
    this.feature = '';
    this.price = null;
    this.brand = '';
    
  }

  resetFormWithFormRef(form: NgForm) {
    form.resetForm();
    form.form.markAsPristine();
    form.form.markAsUntouched();
  }



}
