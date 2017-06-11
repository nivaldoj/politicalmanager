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
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


import * as firebase from 'firebase/app';
import { HomeComponent } from './home/home.component';
import { FirebaseService } from "app/servico/firebase.service";
import { RankingComponent } from "app/ranking/ranking.component";
import { MenuComponent } from './menu/menu.component';



/*export const firebaseConfig = {
  apiKey: 'AIzaSyC1X_gsSZA50eU9UTAvSVZM7IBG_hXfNKE',
  authDomain: 'memorygame-dcf75.firebaseapp.com',
  databaseURL: 'https://memorygame-dcf75.firebaseio.com',
  storageBucket: 'memorygame-dcf75.appspot.com',
  messagingSenderId: '141561373290',
  projectId: 'memorygame-dcf75',
};*/

export const firebaseConfig = {
   apiKey: 'AIzaSyAvKxHUA8sfbgTZGKBBNogHNPGG-ajX6RQ',
    authDomain: 'politicalmanager-a7776.firebaseapp.com',
    databaseURL: 'https://politicalmanager-a7776.firebaseio.com',
    projectId: 'politicalmanager-a7776',
    storageBucket: 'politicalmanager-a7776.appspot.com',
    messagingSenderId: '864549459078'
}

@NgModule({
  declarations: [
    AppComponent,
    EscalacaoComponent,
    PontuacaoComponent,
    RankingComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
