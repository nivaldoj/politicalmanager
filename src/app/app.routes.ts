import {Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {EscalacaoComponent} from './escalacao/escalacao.component';
import {PontuacaoComponent} from './pontuacao/pontuacao.component';
import { RankingComponent } from "app/ranking/ranking.component";
import { IbisComponent } from "app/ibis/ibis.component";


export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'escalacao', component: EscalacaoComponent},
  {path: 'pontuacao', component: PontuacaoComponent},
  {path: 'ranking', component: RankingComponent},
  {path: 'ibis', component: IbisComponent}

]
