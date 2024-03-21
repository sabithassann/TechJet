import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private firestore: AngularFirestore ,
    private storage: AngularFireStorage ) { }

    uploadImage(image: File): Promise<string | null> {
      // Firebase Storage logic to upload image
      const storageRef = this.storage.ref('productImages/' + image.name);
      return storageRef.put(image)
        .then(snapshot => snapshot.ref.getDownloadURL())
        .catch(error => {
          console.error('Error uploading image: ', error);
          return null;
        });
    }
  
    saveProduct(productData: any, imageUrl: string): Promise<DocumentReference<any>> {
      // Save product details to Firestore
      const { name, category, model, display, processor, RAM, feature,price,brand /* Add other keys */ } = productData;
      const sanitizedData = {
        name: name,
        category: category,
        imageUrl: imageUrl,
        model: model,
        display: display,
        processor: processor,
        RAM: RAM,
        feature: feature,
        price:price,
        brand:brand
        // Add other keys...
      };
  
      return this.firestore.collection('products').add(sanitizedData);
    }



    // getProductsByCategory(category: string): Observable<any[]> {
    //   return this.firestore.collection('products', ref => ref.where('category', '==', category))
    //     .valueChanges();
    // }

    getProductsByCategory(category: string, maxPrice?: number): Observable<any[]> {
      let collection = this.firestore.collection<any>('products', ref =>
        ref.where('category', '==', category)
      );
    
      if (maxPrice !== undefined && maxPrice !== null) {
        collection = this.firestore.collection('products', ref =>
          ref.where('category', '==', category)
            .where('price', '<=', maxPrice)
        );
      }
    
      return collection.valueChanges({ idField: 'id' });
    }



    //save news in firebase


    uploadNewsImage(image: File): Promise<string | null> {
      const storageRef = this.storage.ref('newsImages/' + image.name);
      return storageRef.put(image)
        .then(snapshot => snapshot.ref.getDownloadURL())
        .catch(error => {
          console.error('Error uploading news image: ', error);
          return null;
        });
    }
    
    saveNews(newsData: any, imageUrl: string,): Promise<DocumentReference<any>> {
      const { articleTitle, author, date, shortDescription, fullArticle ,category/* Add other keys */ } = newsData;
    
      const sanitizedData = {
        imageUrl: imageUrl,
        articleTitle: articleTitle,
        author: author,
        date: date,
        shortDescription: shortDescription,
        fullArticle: fullArticle,
        category: category
        // Add other keys...
      };
    
      return this.firestore.collection('news').add(sanitizedData);
    }
    
    getNews(): Observable<any[]> {
      return this.firestore.collection('news').valueChanges({ idField: 'id' });
    }



    getNewsByCategory(category: string): Observable<any[]> {
      const collection = this.firestore.collection<any>('news', ref =>
        ref.where('category', '==', category)
      );
    
      return collection.valueChanges({ idField: 'id' });
    }


    getArticleById(id: string): Observable<any> {
      return this.firestore.collection('news').doc(id).valueChanges();
    }


    //save blogs


    uploadBlogsImage(image: File): Promise<string | null> {
      const storageRef = this.storage.ref('blogsImages/' + image.name);
      return storageRef.put(image)
        .then(snapshot => snapshot.ref.getDownloadURL())
        .catch(error => {
          console.error('Error uploading blogs image: ', error);
          return null;
        });
    }
    
    saveBlogs(blogsData: any, imageUrl: string,): Promise<DocumentReference<any>> {
      const { articleTitle, author, date, shortDescription, fullArticle ,category/* Add other keys */ } = blogsData;
    
      const sanitizedData = {
        imageUrl: imageUrl,
        articleTitle: articleTitle,
        author: author,
        date: date,
        shortDescription: shortDescription,
        fullArticle: fullArticle,
        category: category
        // Add other keys...
      };
    
      return this.firestore.collection('blogs').add(sanitizedData);
    }
    
    getBlogs(): Observable<any[]> {
      return this.firestore.collection('blogs').valueChanges({ idField: 'id' });
    }



    getBlogsByCategory(category: string): Observable<any[]> {
      const collection = this.firestore.collection<any>('blogs', ref =>
        ref.where('category', '==', category)
      );
    
      return collection.valueChanges({ idField: 'id' });
    }


    getBlogsArticleById(id: string): Observable<any> {
      return this.firestore.collection('blogs').doc(id).valueChanges();
    }





    //for update get delete in admin


    getProductsByModel(model: string): Observable<any[]> {
      return this.firestore.collection('products', ref =>
        ref.where('model', '==', model).limit(1)
      ).valueChanges({ idField: 'id' });
    }
  
    deleteProductByModel(model: string): Promise<void> {
      return this.firestore.collection('products', ref =>
        ref.where('model', '==', model).limit(1)
      ).get().toPromise()
        .then(querySnapshot => {
          if (querySnapshot && !querySnapshot.empty) {
            querySnapshot.forEach(doc => {
              doc.ref.delete();
            });
          } else {
            console.log('No matching product found for deletion');
          }
        })
        .catch(error => {
          console.error('Error deleting product: ', error);
        });
    }
  
    updateProductByModel(model: string, updatedData: Partial<any>): Promise<void> {
      return this.firestore.collection('products', ref =>
        ref.where('model', '==', model).limit(1)
      ).get().toPromise()
        .then(querySnapshot => {
          if (querySnapshot && !querySnapshot.empty) {
            querySnapshot.forEach(doc => {
              doc.ref.update(updatedData);
            });
          } else {
            console.log('No matching product found for update');
          }
        })
        .catch(error => {
          console.error('Error updating product: ', error);
        });
    }





    //for modify news


    // getNewsByDate(date: string) {
    //   return this.firestore.collection('news', ref => ref.where('date', '==', date)).valueChanges();
    // }

    // getNewsByDateRange(startDate: Date, endDate: Date): Observable<any[]> {
    //   return this.firestore.collection('news', ref =>
    //     ref.where('date', '>=', startDate).where('date', '<=', endDate)
    //   ).valueChanges();
    // }

    getNewsByDateRange(startDate: string, endDate: string): Observable<any[]> {
      // Convert string dates to JavaScript Date objects
      const startDateObj = new Date(startDate);
      const endDateObj = new Date(endDate + 'T23:59:59'); // Set end time to the end of the day
    
      return this.firestore.collection('news', ref =>
        ref.where('date', '>=', startDateObj).where('date', '<=', endDateObj)
      ).valueChanges();
    }
  
    // Delete a news article by its ID
    deleteNews(articleId: string): Promise<void> {
      return this.firestore.collection('news').doc(articleId).delete();
    }
  
    // Update a news article (implement as per your update logic)
    updateNews(articleId: string, updatedData: any) {
      return this.firestore.collection('news').doc(articleId).update(updatedData);
    }







    //new product details buy now



    getProductById(productId: string): Observable<any> {
      return this.firestore.collection('products').doc(productId).valueChanges();
    }



    //for brand

    getProductsByBrand(brand: string, maxPrice?: number): Observable<any[]> {
      let collection = this.firestore.collection<any>('products', ref =>
        ref.where('brand', '==', brand)
      );
    
      if (maxPrice !== undefined && maxPrice !== null) {
        collection = this.firestore.collection('products', ref =>
          ref.where('brand', '==', brand)
            .where('price', '<=', maxPrice)
        );
      }
    
      return collection.valueChanges({ idField: 'id' });
    }


}
