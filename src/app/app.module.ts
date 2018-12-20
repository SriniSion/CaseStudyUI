import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { BillGenerationComponent } from './bill-generation/bill-generation.component';
import {RouterModule, Routes } from '@angular/router';
import { LocalStorageModule } from 'angular-2-local-storage';


const appRoutes: Routes = [
  {path: 'product', component: ProductComponent },
  {path: 'customer', component: CustomerRegistrationComponent },
  {path: 'bill', component: BillGenerationComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CustomerRegistrationComponent,
    BillGenerationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    LocalStorageModule.withConfig({
            prefix: 'first-app',
            storageType: 'localStorage'
        })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
