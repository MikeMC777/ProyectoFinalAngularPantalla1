import { Component, OnInit } from "@angular/core";
import { CrudserviceService } from "../service/crudservice.service";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"],
})
export class MenuComponent implements OnInit {
  seleccion: string = "r";
  nombrealumno: string;
  carril: string = "1";
  estado: string = "nolisto";
  seccion: string;
  dnipadre: number;
  alumnos: any;
  constructor(private service: CrudserviceService) {}

  ngOnInit(): void {
    this.dnipadre = this.service.cedulapadre;
    this.ConsularAlumnos();
  }

  IngresarAlumno() {
    let record = {};
    record["nombre"] = this.nombrealumno;
    record["carril"] = this.carril;
    record["dnipadre"] = this.dnipadre;
    record["estado"] = this.estado;
    record["seccion"] = this.seccion;
    this.service
      .CrearAlumno(record)
      .then((resp) => {
        this.nombrealumno = "";
        console.log(resp);
      })
      .catch((error) => {
        console.log(error);
      });
    this.ConsularAlumnos();
  }
  ConsularAlumnos() {
    this.service.LeerAlumno(this.dnipadre).subscribe((data) => {
      console.log(data);
      this.alumnos = data.map((e) => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          nombre: e.payload.doc.data()["nombre"],
          seccion: e.payload.doc.data()["seccion"],
          estado: e.payload.doc.data()["estado"],
          dnipadre: e.payload.doc.data()["dnipadre"],
          carril: e.payload.doc.data()["carril"],
        };
      });
    });
  }
  RemoveAlumno(id) {
    this.service.DeleteAlumno(id);
  }
  selec_r() {
    this.seleccion = "r";
  }
  selec_i() {
    this.seleccion = "i";
  }
  metodo_llegue() {
    this.service
      .update_Student(this.dnipadre,this.carril);
    this.seleccion = "l";
  }
  metodo_listo() {
    this.service
      .update_StudentListo(this.dnipadre);
    this.seleccion = "r";
  }
}
