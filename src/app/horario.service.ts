import { Injectable } from '@angular/core';
import { Horario } from './models/horario';
import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import { Observable } from 'rxjs/Observable';


@Injectable()
export class HorarioService {


   private horarioCollection: AngularFirestoreCollection<Horario>;

  constructor(private afs: AngularFirestore) { 
    this.horarioCollection = this.afs.collection("hoarario");
  }

  adicionarHorarioFirebase(horario: Horario) {
    this.horarioCollection.add(horario).then(
      resultado => {
        horario.id = resultado.id;
        console.log(horario.id)
      });
  }

  apagarHorarioFirebase(horario): Promise<void> {
    return this.horarioCollection.doc(horario.id).delete();
  }
  atualizarHorarioFirebase(horario): Promise<void>{
    return this.horarioCollection.doc(horario.id).update(horario);
  }

  listarTodos() {
    let resultados: any[] = [];
    let horarios = new Observable<any[]>(observer => {
      this.horarioCollection.snapshotChanges().subscribe(result => {
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
    return horarios;
  }
}
