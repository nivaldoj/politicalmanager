import {Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {EscalacaoComponent} from './escalacao/escalacao.component';
import {PontuacaoComponent} from './pontuacao/pontuacao.component';


export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'escalacao', component: EscalacaoComponent},
  {path: 'pontuacao', component: PontuacaoComponent}
]
