import { Component, OnInit } from '@angular/core';
import {CrudserviceService} from '../service/crudservice.service';

@Component({
  selector: 'app-registropadre',
  templateUrl: './registropadre.component.html',
  styleUrls: ['./registropadre.component.css']
})
export class RegistropadreComponent implements OnInit {
nombre: string;
cedula:number;
celular:number
correo:string;
pass:string;
  constructor(private crudService : CrudserviceService) { }

  ngOnInit(): void {
  }
  IngresarPadre(){
    let record ={}
    record['nombre']=this.nombre
    record['cedula']=this.cedula
    record['celular']=this.celular
    record['correo']=this.correo
    record['pass']=this.pass
    this.crudService.CrearPadre(record).then(resp=>{
     this.nombre="";
   this.cedula=undefined;
   this.celular=undefined;
   this.correo="";
   this.pass="";
      console.log(resp);
    })
    .catch (error=>{
      console.log(error);
    });
      }

}
