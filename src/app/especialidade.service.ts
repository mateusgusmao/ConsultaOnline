import { Injectable } from '@angular/core';
import { Especialidade } from './models/especialidade';
import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import {Observable} from 'rxjs/Observable';


@Injectable()
export class EspecialidadeService {

  especial: Especialidade;

  private especialidadeCollection: AngularFirestoreCollection<Especialidade>;
   
  constructor(private afs: AngularFirestore) { 
    this.especialidadeCollection = this.afs.collection("especialidade");
  }

  adicionarEspecialidadeFirebase(especialidade: Especialidade) {
    this.especialidadeCollection.add(especialidade).then(
      resultado => {
        especialidade.id = resultado.id;
        console.log(especialidade.id);
      });
  }

   
  apagarEspecialidadeFirebase(especialidade): Promise<void> {
    return this.especialidadeCollection.doc(especialidade.id).delete();
  }

  listarTodos(){
    let resultados: any[] = [];
    let especialidades = new Observable<any[]>(observer => {
      this.especialidadeCollection.snapshotChanges().subscribe(result => {
        result.map(documents => {
          let id = documents.payload.doc.id;
          let data = documents.payload.doc.data();
          let document = { id: id, ...data };
          resultados.push(document);
        });
        observer.next(resultados);
        observer.complete();
      }); });
    return especialidades;
  }

}
