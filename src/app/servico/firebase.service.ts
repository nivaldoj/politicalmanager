import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import 'rxjs/add/operator/map';

@Injectable()
export class FirebaseService {


  listaPontuacao: FirebaseListObservable<any[]>;
  listaIbis: FirebaseListObservable<any[]>;
 // registroPontuacao: FirebaseObjectObservable<any>;

/*  constructor(public afAuth: AngularFireAuth, public db: AngularFireDatabase) {
    this.listaPontuacao = this.afAuth.database.list('/pontuacao', {
      query: {
        orderByChild: 'pontuacao',
        // limitToFirst: 10
      }
    }) as FirebaseListObservable<RegistroPontuacao[]>;
    // .map((array) => array.reverse()) as FirebaseListObservable<RegistroPontuacao[]>
  }*/

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    this.listaPontuacao = af.list('/pontuacao', {
      query: {
        limitToLast: 50
      }
    });

     this.listaIbis = af.list('/ibis', {
      query: {
        limitToLast: 50
      }
    });
  }

  getListings() {
    return this.listaPontuacao;

  }

  getListingsIbis(){
      return this.listaIbis;
  }



  inserir(registroPontuacao) {
    return this.listaPontuacao.push(registroPontuacao);

  }



}



interface RegistroPontuacao {
  $key?: string;
  nome?: string;
  pontuacao?: number;
}
