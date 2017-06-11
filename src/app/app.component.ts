import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "app/servico/firebase.service";
import { UsuarioLogado } from "app/shared/usuarioLogado";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';



  constructor() {
   // delete sessionStorage['entrouEscalacao'];

  }

  ngOnInit() {


  }


}
