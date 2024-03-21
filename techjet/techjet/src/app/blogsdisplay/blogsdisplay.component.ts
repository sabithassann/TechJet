import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-blogsdisplay',
  templateUrl: './blogsdisplay.component.html',
  styleUrl: './blogsdisplay.component.css'
})
export class BlogsdisplayComponent implements OnInit{

  category: string | null = null;
  blogsArticles: any[] = [];



  constructor(
    private route: ActivatedRoute,
    private firebaseService: FirebaseService,
    private router :Router
  ){}

  ngOnInit(): void {
    this.loadAllBlogs();
  }


  loadAllBlogs(){
    this.firebaseService.getBlogs().subscribe((data: any[]) => {
      this.blogsArticles = data;
    });
  }

  showBlogsArticleDetail(article: any) {
    this.router.navigate(['blogsarticle-detail', article.id]); // Use the article's ID to navigate
  }



  
  formatDate(timestamp: any): string {
    const date = timestamp.toDate(); // Convert Firestore Timestamp to JavaScript Date
    return new Date(date).toLocaleDateString(); // Format Date to a desired format
  }
}
