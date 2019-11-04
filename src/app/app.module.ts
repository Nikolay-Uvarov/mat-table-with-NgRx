import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerTableComponent } from './customer-table/customer-table.component';
import { StorageModule } from './store/storage.module';
import { CustomerService } from './services/customer.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';

@NgModule({
  declarations: [
    AppComponent,
    CustomerTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StorageModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
