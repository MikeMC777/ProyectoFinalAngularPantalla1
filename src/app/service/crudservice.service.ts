import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root",
})
export class CrudserviceService {
  cedulapadre: number;
  Id: string;
  constructor(private firestore: AngularFirestore) {}

  CrearPadre(record) {
    return this.firestore.collection("padres").add(record);
  }
  LeerPadre(cedula, pass) {
    return this.firestore
      .collection("padres", (ref) =>
        ref.where("cedula", "==", cedula).where("pass", "==", pass)
      )
      .snapshotChanges();
  }
  CrearAlumno(record) {
    return this.firestore.collection("alumno").add(record);
  }
  LeerAlumno(cedulapadre) {
    return this.firestore
      .collection("alumno", (ref) => ref.where("dnipadre", "==", cedulapadre))
      .snapshotChanges();
  }
  DeleteAlumno(Id) {
    this.firestore.doc("alumno/" + Id).delete();
  } 

  update_Student(record,carril) {
    const self = this;
    self.firestore
      .collection("alumno", (ref) => ref.where("dnipadre", "==", record))
      .get()
      .subscribe(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          debugger;
          console.log(doc.id, " => ", doc.data());
          // Build doc ref from doc.id
          self.firestore
            .collection("alumno")
            .doc(doc.id)
            .update({ estado: "listo",carril: carril });
        });
      });
  }
  update_StudentListo(record) {
    const self = this;
    self.firestore
      .collection("alumno", (ref) => ref.where("dnipadre", "==", record))
      .get()
      .subscribe(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          debugger;
          console.log(doc.id, " => ", doc.data());
          // Build doc ref from doc.id
          self.firestore
            .collection("alumno")
            .doc(doc.id)
            .update({ estado: "nolisto" });
        });
      });
  }
}
