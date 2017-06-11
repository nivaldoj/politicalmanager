import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { FirebaseService } from 'app/servico/firebase.service';
import { UsuarioLogado } from "app/shared/usuarioLogado";




@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RankingComponent implements OnInit {

  listaPontuacao: Array<any>;
  usuarioLogado: UsuarioLogado;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {

    if (sessionStorage['usuarioLogado']) {
      //this.usuarioLogado = sessionStorage['usuarioLogado'];
      this.usuarioLogado = JSON.parse(sessionStorage['usuarioLogado']);
      console.log(this.usuarioLogado.nome);
    }


    this.firebaseService.getListings().subscribe(listaPontuacao => {
      // console.log(listaPontuacao);
      this.listaPontuacao = listaPontuacao.sort(function (a, b) { return b.pontuacao - a.pontuacao }).slice(0, 10);
      // this.listaPontuacao = this.listaPontuacao.slice
    });

  }



}
