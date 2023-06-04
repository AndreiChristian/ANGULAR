import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SeasonsComponent } from './seasons/seasons.component';
import { CdkTableModule } from '@angular/cdk/table';
import { SidenavComponent } from './UI/sidenav/sidenav.component';
import { MobilenavComponent } from './UI/mobilenav/mobilenav.component';

@NgModule({
  declarations: [AppComponent, SeasonsComponent, SidenavComponent, MobilenavComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CdkTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
