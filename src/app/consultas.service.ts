import { Injectable } from '@angular/core';
import { Consulta } from './models/consulta';
import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ConsultasService {

  private consultaCollection: AngularFirestoreCollection<Consulta>;

  constructor(private afs: AngularFirestore) {
    this.consultaCollection = this.afs.collection("consulta");
  }

  adicionarConsultaFirebase(consulta: Consulta) {
    this.consultaCollection.add(consulta).then(
      resultado => {
        consulta.id = resultado.id;
      });
  }

  apagarConsultaFirebase(consulta): Promise<void> {
    return this.consultaCollection.doc(consulta.id).delete();
  }

  atualizarConsultaFirebase(consulta): Promise<void> {
    return this.consultaCollection.doc(consulta.id).update(consulta);
  }

  listarTodos() {
    let resultados: any[] = [];
    let consultas = new Observable<any[]>(observer => {
      this.consultaCollection.snapshotChanges().subscribe(result => {
        result.map(documents => {
          let id = documents.payload.doc.id;
          let data = documents.payload.doc.data();
          let document = { id: id, ...data };
          resultados.push(document);
        });
        observer.next(resultados);
        observer.complete();
      });
    });
    return consultas;
  }

  listarPorIdUsuario(idPaciente: String): Observable<any[]> {
    let resultados: any[] = [];
    let meuObservable = new Observable<any[]>(observer => {
      this.consultaCollection = this.afs.collection<Consulta>("consulta", ref => ref.where('idPaciente', '==', idPaciente));
      this.consultaCollection.snapshotChanges().subscribe(result => {
        result.map(documents => {
          let id = documents.payload.doc.id;
          let data = documents.payload.doc.data();
          let document = { id: id, ...data };
          resultados.push(document);
        });
        observer.next(resultados);
        observer.complete();
      });
    });
    return meuObservable;
  }


  listarId(consultaId) {
    return new Observable(observer => {
      let doc = this.consultaCollection.doc(consultaId);
      doc.snapshotChanges().subscribe(result => {
        let id = result.payload.id;
        let data = result.payload.data()
        let document = { id: id, ...data };
        observer.next(document);
        observer.complete();
      });
    });
  }



  /*

  consultas: Consulta[] = [];
  consulta: Consulta = new Consulta();
    
 AddConsulta(consulta:Consulta){
    this.consulta.id++;
    this.consultas.push(consulta);

  } 

  getConsultas(){
    return this.consultas;
  }

  deletarConsultaId(id){
    this.consultas.splice(this.procurarPorId(id),1);
    console.log("Deletado");
    console.log(this.consultas);
        
    
    // come
    let pos:number = -1;
      for (let i = 0; i < this.consultas.length; i++ ){
          if(this.consultas[i].id == id){
             pos = i;
           }

      }
      this.consultas.splice(pos,1);
  }

 constructor() { //não existe
    let consultaA:Consulta = new Consulta();
    consultaA.data = new Date("09.26.2017");
    consultaA.especialidade = "W";
    consultaA.planoSaude = "Z";
    this.AddConsulta(consultaA);
   }

   //ter

   getConsulta(id){
     let consulta:Consulta = new Consulta();
     consulta =  this.consultas[this.procurarPorId(id)];
     console.log("4dg45g");
     console.log(consulta);
     return consulta;
   }

   procurarPorId(id){
     let pos:number = -1;
      for (let i = 0; i < this.consultas.length; i++ ){
          if(this.consultas[i].id == id){
             pos =i;
           }

      }
      console.log("procurar")
      console.log(this.consultas[pos]);
      return pos; 

   } */

}
