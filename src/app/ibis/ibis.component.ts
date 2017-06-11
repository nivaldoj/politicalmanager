import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "app/servico/firebase.service";
import { UsuarioLogado } from "app/shared/usuarioLogado";

@Component({
  selector: 'pm-ibis',
  templateUrl: './ibis.component.html',
  styleUrls: ['./ibis.component.css']
})
export class IbisComponent implements OnInit {



  listaIbis: Array<any>;
  usuarioLogado: UsuarioLogado;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {

    if (sessionStorage['usuarioLogado']) {
      //this.usuarioLogado = sessionStorage['usuarioLogado'];
      this.usuarioLogado = JSON.parse(sessionStorage['usuarioLogado']);
      console.log(this.usuarioLogado.nome);
    }


    this.firebaseService.getListingsIbis().subscribe(listaIbis => {
      // console.log(listaPontuacao);
      this.listaIbis = listaIbis;
      // this.listaPontuacao = this.listaPontuacao.slice
    });

  }

}
