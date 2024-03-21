import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { RegisterComponent } from './component/register/register.component';
import { VarifyEmailComponent } from './component/varify-email/varify-email.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { TrendingProductsComponent } from './trending-products/trending-products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NewsComponent } from './news/news.component';
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

const routes: Routes = [
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  { path: 'products/:category', component: ProductListComponent },
  //{path:'dashboard',component:DashboardComponent},
  {path:'dashboard',component:HomeComponent},
  {path:'products',component:TrendingProductsComponent},
  {path:'product/:id',component:ProductDetailsComponent},
  {path:'register',component:RegisterComponent},
  {path:'varify-email',component:VarifyEmailComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'add-product',component:ProductFormComponent},
  {path:'add-news',component:NewsComponent},
  {path:'shownews',component:NewsdisplayComponent},
  {path:'article-detail/:id',component:ArticledetailsComponent},
  {path:'add-blogs',component:JetblogsComponent},
  {path:'showblogs',component:BlogsdisplayComponent},
  {path:'blogsarticle-detail/:id',component:BlogsarticledetailsComponent},
  {path:'admin-pannel',component:AdminComponent},
  {path:'admin',component:LoginadminComponent},
  {path:'modify',component:ModifyComponent},
  {path:'productss',component:ProductListComponent},
  {path:'productss/:id',component:ProductsdetailsComponent},
  {path:'cart',component:CartComponent},
  {path:'brand/:brandName',component:ProductByBrandComponent}
  

  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
