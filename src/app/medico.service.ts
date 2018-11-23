import { Injectable } from '@angular/core';
import { Medico } from './models/medico'
import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MedicoService {

  private medicoCollection: AngularFirestoreCollection<Medico>;

  constructor(private afs: AngularFirestore) {
    this.medicoCollection = this.afs.collection("medico");
  }

  adicionarMedicoFirebase(medico: Medico) {
    this.medicoCollection.add(medico).then(
      resultado => {
        medico.id = resultado.id;
      });
  }

  apagarMedicoFirebase(medico): Promise<void> {
    return this.medicoCollection.doc(medico.id).delete();
  }

  listarTodos() {
    let resultados: any[] = [];
    let medicos = new Observable<any[]>(observer => {
      this.medicoCollection.snapshotChanges().subscribe(result => {
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
    return medicos;
  }

}
