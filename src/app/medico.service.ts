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
        console.log(medico.id)
      });
  }

  apagarMedicoFirebase(medico): Promise<void> {
    return this.medicoCollection.doc(medico.id).delete();
  }
  atualizarMedicoFirebase(medico): Promise<void>{
    return this.medicoCollection.doc(medico.id).update(medico);
  }

  listarPorTurno(turno: String): Observable<any[]> {
    let resultados: any[] = [];
    let meuObservable = new Observable<any[]>(observer => {
      this.medicoCollection = this.afs.collection<Medico>("medico", ref => ref.where('turno', '==', turno));
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
    return meuObservable;
  }

  listarPorNomeEsp(nomeEspecialidade: String): Observable<any[]> {
    let resultados: any[] = [];
    let meuObservable = new Observable<any[]>(observer => {
      this.medicoCollection = this.afs.collection<Medico>("medico", ref => ref.where('nomeEspecialidade', '==', nomeEspecialidade));
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
    return meuObservable;
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
