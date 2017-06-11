import { Component, OnInit } from '@angular/core';
import { Parlamentar } from "app/shared/parlamentar";
import { BASE_PARLAMENTARES } from "app/shared/base";
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UsuarioLogado } from "app/shared/usuarioLogado";
import { FirebaseService } from "app/servico/firebase.service";

@Component({
  selector: 'pm-escalacao',
  templateUrl: './escalacao.component.html',
  styleUrls: ['./escalacao.component.css']
})
export class EscalacaoComponent implements OnInit {

  parlamentares: Parlamentar[];
  parlamentaresFiltro: Parlamentar[];
  time: Parlamentar[] = [];
  selectTipoParlamentar: string = 'DEPUTADO';
  selectPartido: string = '';
  tipos: string[];
  partidos: string[];
  ufs: string[];
  selectUF: string = 'PB';
  selectFormacao: string;
  formacoes: string[];
  imagemCampo: string;
  quantDeputados: number;
  quantSenadores: number;
  usuarioLogado: UsuarioLogado;


  constructor(private router: Router, public firebaseService: FirebaseService) {

    this.parlamentares = BASE_PARLAMENTARES;

    this.tipos = ['DEPUTADO', 'SENADOR'];

    this.partidos = ['PDT', 'PMDB', 'PSD', 'PT', 'PV'];

    this.ufs = ['PB', 'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RS', 'RO', 'RS', 'SC', 'SE','SP', 'TO'];

    this.formacoes = ['4-1', '1-4', '2-3', '3-2'];

    this.selectFormacao = this.formacoes[3];
    this.imagemCampo = "assets/img/campo32.gif";





    this.parlamentaresFiltro = this.parlamentares.filter(
      parlamentar => parlamentar.tipo === this.selectTipoParlamentar);

    if (this.selectUF !== '') {
      this.parlamentaresFiltro = this.parlamentaresFiltro.filter(parlamentar => parlamentar.uf === this.selectUF);
    }



  }

  selecionarParlamentar(parlamentar: Parlamentar) {

    if (this.time.length < 5) {
      this.time.push(parlamentar);
      parlamentar.escalado = true;
    }


  }

  ngOnInit() {

    if (sessionStorage['usuarioLogado']) {
      //this.usuarioLogado = sessionStorage['usuarioLogado'];
      this.usuarioLogado = JSON.parse(sessionStorage['usuarioLogado']);
      console.log(this.usuarioLogado.nome);
    }

    this.time = [];



  }

  onChangeFormacao() {
    if (this.selectFormacao === "4-1") {
      this.imagemCampo = "assets/img/campo41.gif"
     // this.quantDeputados = 4;
     // this.quantSenadores = 1;
    }
    else if (this.selectFormacao === "1-4") {
      this.imagemCampo = "assets/img/campo14.gif"
      //this.quantDeputados = 4;
      //this.quantSenadores = 1;
    }
    else if (this.selectFormacao === "2-3") {
      this.imagemCampo = "assets/img/campo23.gif";
      //this.quantDeputados = 2;
     // this.quantSenadores = 3;
    }
    else if (this.selectFormacao === "3-2") {
      this.imagemCampo = "assets/img/campo32.gif";
     // this.quantDeputados = 3;
     // this.quantSenadores = 2;
    }
  }

  removerParlamentar(parlamentar: Parlamentar) {
    // let indice = -1;
    //  for(let i=0; i<this.time.length;i++){
    //    if(this.time[i].id == parlamentar.id){
    //      indice = i;
    //      this.time.slice(i,1);
    //    }
    //  }

    let index = this.time.indexOf(parlamentar, 0);
    if (index > -1) {
      this.time.splice(index, 1);
      parlamentar.escalado = false;
    }

  }



  onChangeTipo() {
    // this.parlamentares.filter

    this.parlamentaresFiltro = this.parlamentares.filter(
      parlamentar => parlamentar.tipo === this.selectTipoParlamentar);

    if (this.selectPartido !== '') {

      this.parlamentaresFiltro = this.parlamentaresFiltro.filter(parlamentar => parlamentar.partido === this.selectPartido);
    }

    if (this.selectUF !== '') {

      this.parlamentaresFiltro = this.parlamentaresFiltro.filter(parlamentar => parlamentar.uf === this.selectUF);
    }
  }

  onChangePartido() {
    // this.parlamentares.filter
    this.parlamentaresFiltro = this.parlamentares.filter(
      parlamentar => parlamentar.tipo === this.selectTipoParlamentar);
    if (this.selectPartido !== '') {

      this.parlamentaresFiltro = this.parlamentaresFiltro.filter(parlamentar => parlamentar.partido === this.selectPartido);
    }

    if (this.selectUF !== '') {

      this.parlamentaresFiltro = this.parlamentaresFiltro.filter(parlamentar => parlamentar.uf === this.selectUF);
    }

  }

  onChangeUF() {

    this.parlamentaresFiltro = this.parlamentares.filter(
      parlamentar => parlamentar.tipo === this.selectTipoParlamentar);

    if (this.selectPartido !== '') {

      this.parlamentaresFiltro = this.parlamentaresFiltro.filter(parlamentar => parlamentar.partido === this.selectPartido);
    }

    if (this.selectUF !== '') {

      this.parlamentaresFiltro = this.parlamentaresFiltro.filter(parlamentar => parlamentar.uf === this.selectUF);
    }

  }

  confirmarEscalacao() {
    this.router.navigate(['/pontuacao']);
 /*   let dataHora = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString();

    let registroPontuacao = {
      foto: this.usuarioLogado.foto,
      nome: this.usuarioLogado.nome,
      pontuacao: 10,
      data: dataHora
    }*/

     sessionStorage['timeEscalado'] = JSON.stringify(this.time);
    //this.firebaseService.inserir(registroPontuacao);
  }





}
