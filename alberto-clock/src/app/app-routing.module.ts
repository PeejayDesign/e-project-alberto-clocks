import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { StorelocatorComponent } from './storelocator/storelocator.component';
import { SupportComponent } from './support/support.component';

const routes: Routes = [
  {path: 'product', component:ProductComponent},
  {path: 'aboutUs', component:AboutUsComponent},
  {path: 'storelocator', component:StorelocatorComponent},
  {path: 'support', component:SupportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
