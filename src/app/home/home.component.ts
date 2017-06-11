import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { UsuarioLogado } from "app/shared/usuarioLogado";


@Component({
  selector: 'pm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {





  user: Observable<firebase.User>;
  usuarioGmail: any;
  usuarioLogado: UsuarioLogado;

  constructor(private router: Router, public afAuth: AngularFireAuth, public db: AngularFireDatabase) {

    this.user = afAuth.authState;

  }


  loginGmail() {
    this.usuarioGmail = this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    //console.log(this.usuarioGmail);
    //console.log(this.usuarioGmail.W);
    //console.log(this.usuarioGmail.email);
    //console.log('usuário' + this.usuario);

    this.user.subscribe(usuario => {
      if (usuario) {
        // user logged in
        this.usuarioLogado = new UsuarioLogado(usuario.displayName, usuario.photoURL);
        sessionStorage['usuarioLogado'] = JSON.stringify(this.usuarioLogado);
      }
    });

  }

   loginFacebook() {
    this.usuarioGmail = this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider);
    //console.log(this.usuarioGmail);
    //console.log(this.usuarioGmail.W);
    //console.log(this.usuarioGmail.email);
    //console.log('usuário' + this.usuario);

    this.user.subscribe(usuario => {
      if (usuario) {
        // user logged in
        this.usuarioLogado = new UsuarioLogado(usuario.displayName, usuario.photoURL);
        sessionStorage['usuarioLogado'] = JSON.stringify(this.usuarioLogado);
      }
    });

  }



  logout() {
    this.afAuth.auth.signOut();
    delete sessionStorage['usuarioLogado'];
  }






  ngOnInit() {
  }


  irparaEscalacao() {
    this.router.navigate(['/escalacao']);
  }

}
