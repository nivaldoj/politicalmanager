import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ROUTES} from './app.routes';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EscalacaoComponent } from './escalacao/escalacao.component';
import { PontuacaoComponent } from './pontuacao/pontuacao.component';
import { AngularFireModule } from 'angularfire2';



import { HomeComponent } from './home/home.component';


export const firebaseConfig = {
  apiKey: 'AIzaSyC1X_gsSZA50eU9UTAvSVZM7IBG_hXfNKE',
  authDomain: 'memorygame-dcf75.firebaseapp.com',
  databaseURL: 'https://memorygame-dcf75.firebaseio.com',
  storageBucket: 'memorygame-dcf75.appspot.com',
  messagingSenderId: '141561373290',
  projectId: 'memorygame-dcf75',
};


@NgModule({
  declarations: [
    AppComponent,
    EscalacaoComponent,
    PontuacaoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
     AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
