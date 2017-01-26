import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';


  var config = {
    apiKey: "AIzaSyBREZj86wtKfbHpM2pC9wPouKxa9bB8a0U",
    authDomain: "fir-1-ab77c.firebaseapp.com",
    databaseURL: "https://fir-1-ab77c.firebaseio.com",
    storageBucket: "fir-1-ab77c.appspot.com",
    messagingSenderId: "353613024655"
  };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
