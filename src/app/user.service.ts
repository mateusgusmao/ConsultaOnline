import { Injectable } from '@angular/core';
import { User } from './models/user'
import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class UserService {

  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;
  usuarioLogado: User;

  private userCollection: AngularFirestoreCollection<User>;

  constructor(private afs: AngularFirestore, private firebaseAuth: AngularFireAuth, private router: Router) {
    this.userCollection = this.afs.collection<User>("user");
    this.user = firebaseAuth.authState;
    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          console.log(this.userDetails);
        } else {
          this.userDetails = null;
        }
      }
    );
  }

  salvar(user: User) {
    this.userCollection.add(user).then(
      resultado => {
        user.id = resultado.id;
        console.log(user.id);
      });

  }
  deletar(user): Promise<void> {
    return this.userCollection.doc(user.id).delete();
  }

  loginUsuario(user: String, senha: String): Observable<any> {
    let meuObservable = new Observable<any>(observer => {
      let collectionFiltrada = this.afs.collection<User>('usuario', ref =>
        ref.where('user', '==', user)
          .where('senha', '==', senha));
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

  listarTodos(): Observable<any[]> {
    let resultados: any[] = [];
    let meuObservable = new Observable<any[]>(observer => {
      this.userCollection.snapshotChanges().subscribe(result => {
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

  listarPorId(userId) {
    return new Observable(observer => {
      let doc = this.userCollection.doc(userId);
      doc.snapshotChanges().subscribe(result => {
        let id = result.payload.id;
        let data = result.payload.data()
        let document = { id: id, ...data };
        observer.next(document);
        observer.complete();
      });
    });
  }

  loginGoogle() {
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }

  isLoggedIn() {
    if (this.userDetails == null) {
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

  /*usuarioExiste(user: User){
    let exist:boolean = false;
  for(let i:number=0;i<this.users.length;i++){
    if(this.users[i].username == user.username && this.users[i].password == user.password){
       exist = true;
    }else{
      alert("Usuário ainda não cadastrado")
     }
    }
    return exist;  
  } */


