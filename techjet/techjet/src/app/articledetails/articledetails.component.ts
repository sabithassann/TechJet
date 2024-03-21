import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import firebase from 'firebase/app'; // Import Firebase

@Component({
  selector: 'app-articledetails',
  templateUrl: './articledetails.component.html',
  styleUrl: './articledetails.component.css'
})
export class ArticledetailsComponent implements OnInit{
  articleId: string | null = null;
  article: any = {}; // Initialize article object

  constructor(
    private route: ActivatedRoute,
    private firebaseService: FirebaseService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.articleId = params['id'];
      if (this.articleId) {
        this.loadArticle(this.articleId);
      }
    });
  }

  loadArticle(id: string) {
    // Fetch article details by ID using FirebaseService
    this.firebaseService.getArticleById(id).subscribe((data: any) => {
      this.article = data;
    });
  }

  formatDate(timestamp: any): string {
    const date = timestamp.toDate(); // Convert Firestore Timestamp to JavaScript Date
    return new Date(date).toLocaleDateString(); // Format Date to a desired format
  }


  

}
