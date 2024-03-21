import { Component } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-jetblogs',
  templateUrl: './jetblogs.component.html',
  styleUrl: './jetblogs.component.css'
})
export class JetblogsComponent {

  
  articleTitle: string = '';
  author: string = '';
  date: string = '';
  category: string = '';
  shortDescription: string = '';
  fullArticle: string = '';
  blogsImage: File | null = null;

  submissionError: string | null = null;
  isLoading: boolean = false;

  constructor(private firebaseService: FirebaseService) { }

  onFileSelected(event: any) {
    this.blogsImage = event.target.files[0];
  }

  onSubmitBlogs() {
    this.submissionError = null; // Resetting previous errors
    if (
      !this.blogsImage ||
      !this.articleTitle ||
      !this.author ||
      !this.date ||
      !this.category ||
      !this.shortDescription ||
      !this.fullArticle
    ) {
      console.error('Please fill all the required fields and select an image!');
      return;
    }

    this.isLoading = true; // Show loading spinner or indicator

    this.firebaseService.uploadBlogsImage(this.blogsImage)
      .then((imageUrl: string | null) => {
        if (imageUrl) {
          this.firebaseService.saveBlogs(
            {
              articleTitle: this.articleTitle,
              author: this.author,
              date: this.date,
              category: this.category,
              shortDescription: this.shortDescription,
              fullArticle: this.fullArticle
              // Add other news details...
            },
            imageUrl
          )
            .then(() => {
              console.log('News article saved successfully!');
              this.isLoading = false;
              this.resetForm();
              // Show success message to the user
            })
            .catch((error) => {
              console.error('Error saving news article: ', error);
              this.submissionError = 'Failed to save the news article. Please try again.';
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
    this.articleTitle = '';
    this.author = '';
    this.date = '';
    this.category = '';
    this.shortDescription = '';
    this.fullArticle = '';
    this.blogsImage = null;
  }

  resetFormWithFormRef(form: NgForm) {
    form.resetForm();
    form.form.markAsPristine();
    form.form.markAsUntouched();
  }

  
}


