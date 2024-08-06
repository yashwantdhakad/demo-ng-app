import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { PostsComponent } from './posts/posts.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactFormComponent
  },
  {
    path: 'registration',
    component: RegistrationFormComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'create-product',
    component: CreateProductComponent
  },
  {
    path: 'create-customer',
    component: CreateCustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
