import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import {AngularFireModule} from '@angular/fire/compat';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component'
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { VarifyEmailComponent } from './component/varify-email/varify-email.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { TopBrandsComponent } from './top-brands/top-brands.component';
import { TopcategoryComponent } from './topcategory/topcategory.component';
import { TrendingProductsComponent } from './trending-products/trending-products.component';
import { WhatsappChatComponent } from './whatsapp-chat/whatsapp-chat.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryFilterComponent } from './category-filter/category-filter.component';
import { NewsComponent } from './news/news.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { NewsdisplayComponent } from './newsdisplay/newsdisplay.component';
import { ArticledetailsComponent } from './articledetails/articledetails.component';
import { JetblogsComponent } from './jetblogs/jetblogs.component';
import { BlogsdisplayComponent } from './blogsdisplay/blogsdisplay.component';
import { BlogsarticledetailsComponent } from './blogsarticledetails/blogsarticledetails.component';
import { AdminComponent } from './admin/admin.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { ModifyComponent } from './modify/modify.component';
import { ProductsdetailsComponent } from './productsdetails/productsdetails.component';
import { CartComponent } from './cart/cart.component';
import { ProductByBrandComponent } from './product-by-brand/product-by-brand.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    VarifyEmailComponent,
    CarouselComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    ProductDetailsComponent,
    TopBrandsComponent,
    TopcategoryComponent,
    TrendingProductsComponent,
    WhatsappChatComponent,
    ProductFormComponent,
    ProductListComponent,
    CategoryFilterComponent,
    NewsComponent,
    NewsdisplayComponent,
    ArticledetailsComponent,
    JetblogsComponent,
    BlogsdisplayComponent,
    BlogsarticledetailsComponent,
    AdminComponent,
    LoginadminComponent,
    ModifyComponent,
    ProductsdetailsComponent,
    CartComponent,
    ProductByBrandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule,
    FormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp({"projectId":"tech-jet","appId":"1:819377174779:web:bab5de9fbb19ed27c4d85e","storageBucket":"tech-jet.appspot.com","apiKey":"AIzaSyAVrQzScQNM4OEPzB4u5CDAqwalsSnpOz4","authDomain":"tech-jet.firebaseapp.com","messagingSenderId":"819377174779"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
