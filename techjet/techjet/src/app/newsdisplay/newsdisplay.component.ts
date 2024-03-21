import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';




@Component({
  selector: 'app-newsdisplay',
  templateUrl: './newsdisplay.component.html',
  styleUrl: './newsdisplay.component.css'
})
export class NewsdisplayComponent implements OnInit{
  category: string | null = null;
  newsArticles: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private firebaseService: FirebaseService,
    private router :Router
  ) {}

  ngOnInit() {
    // this.route.params.subscribe(params => {
    //   this.category = params['category'];
    //   if (this.category) {
    //     this.loadNewsByCategory(this.category);
    //   }
    // });

    this.loadAllNews();
  }

  // loadNewsByCategory(category: string) {
  //   this.firebaseService.getNewsByCategory(category).subscribe((data: any[]) => {
  //     this.newsArticles = data;
  //   });
  // }

  loadAllNews() {
    this.firebaseService.getNews().subscribe((data: any[]) => {
      this.newsArticles = data;
    });
  }


  showArticleDetail(article: any) {
    this.router.navigate(['article-detail', article.id]); // Use the article's ID to navigate
  }


  formatDate(timestamp: any): string {
    if (!timestamp) {
      return ''; // Handle undefined or null case
    }
    const date = timestamp.toDate();
    return new Date(date).toLocaleDateString();
  }
  

}
