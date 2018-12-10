import { Injectable } from '@angular/core';
import { ADM } from './models/adm';
import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AdmService {
  private adm: Observable<firebase.User>;
  private admDetails: firebase.User = null;
  
  admLogado: ADM;

  private admCollection: AngularFirestoreCollection<ADM>;

  constructor(private afs: AngularFirestore, private firebaseAuth: AngularFireAuth, private router: Router) {
    this.admCollection = this.afs.collection<ADM>("adm");
    
    this.adm = firebaseAuth.authState;
    this.adm.subscribe(
      (adm) => {
        if (adm) {
          this.admDetails = adm;
          console.log(this.admDetails);
        } else {
          this.admDetails = null;
        }
      }
    );
  }

  salvar(adm: ADM) {
    this.admCollection.add(adm).then(
      resultado => {
        adm.id = resultado.id;
        console.log(adm.id);
      });
  }

  loginADM(user: String, senha: String): Observable<any> {
    let meuObservable = new Observable<any>(observer => {
      let collectionFiltrada = this.afs.collection<ADM>('adm', ref =>
        ref.where('username', '==', user)
           .where('password', '==', senha));
      let resultados = collectionFiltrada.snapshotChanges().subscribe(result => {
        let document;
        result.map(documents => {
          let id = documents.payload.doc.id;
          let data = documents.payload.doc.data();
          document = { id: id, ...data };
        });
        observer.next(document);
        observer.complete();
      });
    });
    return meuObservable;
  }

  deletar(adm): Promise<void> {
    return this.admCollection.doc(adm.id).delete();
  }

  atualizar(adm): Promise<void>{
    return this.admCollection.doc(adm.id).update(adm);
  }


  listarTodos(): Observable<any[]> {
    let resultados: any[] = [];
    let meuObservable = new Observable<any[]>(observer => {
      this.admCollection.snapshotChanges().subscribe(result => {
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

  listarPorId(admId) {
    return new Observable(observer => {
      let doc = this.admCollection.doc(admId);
      doc.snapshotChanges().subscribe(result => {
        let id = result.payload.id;
        let data = result.payload.data()
        let document = { id: id, ...data };
        observer.next(document);
        observer.complete();
      });
    });
  }

  isLoggedIn() {
    if (this.admDetails == null) {
      return false;
    } else {
      return true;
    }
  }

  sair() {
    this.firebaseAuth.auth.signOut()
      .then(() => this.router.navigate(['/']));
  }
}


