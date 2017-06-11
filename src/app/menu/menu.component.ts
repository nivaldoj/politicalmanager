import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioLogado } from "app/shared/usuarioLogado";
import { FirebaseService } from "app/servico/firebase.service";

@Component({
  selector: 'pm-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

   usuarioLogado: UsuarioLogado;


  constructor(private router: Router, public firebaseService: FirebaseService) { }

  ngOnInit() {

     if (sessionStorage['usuarioLogado']) {
			//this.usuarioLogado = sessionStorage['usuarioLogado'];
      this.usuarioLogado = JSON.parse(sessionStorage['usuarioLogado']);
      console.log(this.usuarioLogado.nome);
		}


  }

   logout() {
    delete sessionStorage['usuarioLogado'];
    delete sessionStorage['entrouEscalacao'];
     this.router.navigate(['/']);
  }

}
