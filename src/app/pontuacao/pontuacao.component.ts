import { Component, OnInit } from '@angular/core';
import { Politico } from 'app/shared/politico';
import { BASE_POLITICOS_PONTUACAO } from 'app/shared/basePoliticosPontuacao';
import { Parlamentar } from 'app/shared/parlamentar';
import { FirebaseService } from 'app/servico/firebase.service';
import { UsuarioLogado } from 'app/shared/usuarioLogado';

@Component({
  selector: 'pm-pontuacao',
  templateUrl: './pontuacao.component.html',
  styleUrls: ['./pontuacao.component.css']
})
export class PontuacaoComponent implements OnInit {

  basePoliticosPontuacao: Politico[];
  time: Parlamentar[] = [];
  usuarioLogado: UsuarioLogado;
  politicosDoTime: any = [];
  registroPontuacao: any = [];
  listaPoliticosJaSalvos: Array<any>;

  constructor(public firebaseService: FirebaseService) {
    this.politicosDoTime = [];
    this.registroPontuacao = [];
  }

  ngOnInit() {

    this.basePoliticosPontuacao = BASE_POLITICOS_PONTUACAO;

    if (sessionStorage['usuarioLogado']) {
      //this.usuarioLogado = sessionStorage['usuarioLogado'];
      this.usuarioLogado = JSON.parse(sessionStorage['usuarioLogado']);
      // console.log(this.usuarioLogado.nome);
    }

    if (sessionStorage['timeEscalado']) {
      //this.usuarioLogado = sessionStorage['usuarioLogado'];
      this.time = JSON.parse(sessionStorage['timeEscalado']);
      // console.log(this.usuarioLogado.nome);
    }

    // this.firebaseService.getListaPoliticosJaSalvos().subscribe(listaPoliticosJaSalvos => {
    // console.log(listaPontuacao);
     // this.listaPoliticosJaSalvos = listaPoliticosJaSalvos;
    // });

     //, error=>{
    //  console.log(error);
    // });

    let pontuacaoTotalUsuario = 0;
    let pontuacaoTotalParlamentar = 0;


    for (let k = 0; k < this.time.length; k++) {
      for (let i = 0; i < this.basePoliticosPontuacao.length; i++) {
        //  if (this.time[k].nomeParlamentar == 'AGUINALDO RIBEIRO') {
        //  console.log('AGUINALDO RIBEIRO');
        //  console.log(this.time[k].id);
        // }
        console.log(this.basePoliticosPontuacao[i].id);
        if ((this.time[k].id + '') === this.basePoliticosPontuacao[i].id.trim()) {
          // console.log(this.basePoliticosPontuacao[i].id);
          //console.log("achou" + this.time[k].nome);
          //  if (this.basePoliticosPontuacao[i].ptsDiscurso != undefined && this.basePoliticosPontuacao[i].ptsGastos != undefined) {
          pontuacaoTotalParlamentar = Number(this.basePoliticosPontuacao[i].ptsDiscurso) +
            Number(this.basePoliticosPontuacao[i].ptsGastos) + Number(this.basePoliticosPontuacao[i].ptsVotacao) ;

          pontuacaoTotalUsuario = pontuacaoTotalUsuario + pontuacaoTotalParlamentar;

          let politico = {
            id: this.basePoliticosPontuacao[i].id.trim(),
            tipo: this.time[k].tipo,
            ptsGastos: this.basePoliticosPontuacao[i].ptsGastos,
            ptsDiscurso: this.basePoliticosPontuacao[i].ptsDiscurso,
            ptsVotacao: this.basePoliticosPontuacao[i].ptsVotacao,
            nome: this.time[k].nomeParlamentar,
            foto: this.time[k].foto,
            partido: this.time[k].partido,
            pontuacaoTotal: pontuacaoTotalParlamentar
          }

          this.politicosDoTime.push(politico);


          //this.listaPoliticosJaSalvos
          // if(politico){
          // this.firebaseService.inserirPontuacaoPolitico(politico);
          //  }
          //let jaExiste: boolean = false;

          //  for (i = 0; i < this.listaPoliticosJaSalvos.length; i++) {
          //  if (this.listaPoliticosJaSalvos[i].id === politico.id) {
          //    jaExiste = true;
          //return true;
          //  }
          //  }

          // if(!jaExiste){
          //    console.log("passou por aqui, inseriu " + politico.nome);
        //  this.firebaseService.inserirPontuacaoPolitico(politico);
          // }


        }

      }
    }

    let dataHora = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString();


    this.registroPontuacao = {
      foto: this.usuarioLogado.foto,
      nome: this.usuarioLogado.nome,
      pontuacao: pontuacaoTotalUsuario,
      data: dataHora,
      politicos: JSON.stringify(this.time)
    }

    this.firebaseService.inserirPontuacaoUsuario(this.registroPontuacao);


  }

}
