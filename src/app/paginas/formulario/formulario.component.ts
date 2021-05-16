import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ServicioService} from '../../servicio.service'
import {Notas} from '../../notas'
import { HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  formulario:FormGroup;
  listaNotas:Array<Notas>=[];
  notas:Notas={titulo:"",estado:"",descripcion:""};
  json:any;

  constructor(public fb:FormBuilder, private servicio:ServicioService, private http:HttpClient) {
    this.formulario=fb.group({
      titulo:['',Validators.required],
      estado:['',Validators.required],
      descripcion:['',Validators.required],
    });
    this.http.post('http://httpbin.org/post',this.notas).toPromise().then(data =>{
      console.log(data);
    });
  }

  ngOnInit(): void {
  }

  Crear(){
    this.notas={
      titulo:this.formulario.get("titulo")?.value,
      estado:this.formulario.get("estado")?.value,
      descripcion:this.formulario.get("descripcion")?.value
    }
    this.http.post('http://httpbin.org/post',this.notas).toPromise().then(notas =>{
      console.log(notas);
      this.json = notas;
    });
  }
}
