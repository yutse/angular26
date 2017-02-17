import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
// import { DatepickerModule } from 'ng2-bootstrap';
import { MaterialModule } from '@angular/material';
import { MdRadioModule } from '@angular/material/radio';
import 'hammerjs';
import { Sub1Component } from './sub1/sub1.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';


  const config = {
    apiKey: 'AIzaSyBmaW_vl8iS6dunx2UhhCdvoDmtVRatqW8',
    authDomain: 'tonyfair-3b314.firebaseapp.com',
    databaseURL: 'https://tonyfair-3b314.firebaseio.com',
    storageBucket: 'tonyfair-3b314.appspot.com',
    messagingSenderId: '134616636706'
  };

@NgModule({
  declarations: [
    AppComponent,
    Sub1Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(config),
    MaterialModule.forRoot(),
    AppRoutingModule
    // DatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
