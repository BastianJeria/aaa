import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import {ServicioService} from '../../servicio.service'
import {Notas} from '../../notas'


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  listaNotas:Array<Notas>=[];

  constructor(private servicio:ServicioService) { }

  ngOnInit(): void {
    this.servicio.Consultar().subscribe(datos=>{
      for(let i=0; i<datos.length;i++){
        this.listaNotas.push(datos[i]);
      }
  
      //console.log(datos);
    });  
  }
}
