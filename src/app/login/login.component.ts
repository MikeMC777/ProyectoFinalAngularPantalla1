import { Component, OnInit } from "@angular/core";
import { CrudserviceService } from "../service/crudservice.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  cedula: number;
  pass: string;
  padres: any;
  mensaje:string;
  constructor(private service: CrudserviceService, private router: Router) {}

  ngOnInit(): void {
    
  }
  ConsultarPadres() {
    this.service.LeerPadre(this.cedula,this.pass).subscribe((data) => {
      console.log(data);
      if(data.length == 0){
this.mensaje="verifique usuario y contraseña"
      }else{
      this.padres = data.map((e) => {
        this.service.cedulapadre = this.cedula;
        this.router.navigate(['menu']);
      });
    }
    })
  } 
  
}
