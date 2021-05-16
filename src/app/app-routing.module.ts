import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormularioComponent} from '../app/paginas/formulario/formulario.component'
import { ListadoComponent } from './paginas/listado/listado.component';

const routes: Routes = [
  {path:'',component:FormularioComponent},
  {path:'listado',component:ListadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
