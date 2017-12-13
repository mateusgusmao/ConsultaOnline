import { Injectable } from '@angular/core';
import { User } from './models/user'
import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";

@Injectable()
export class UserService {

usuarioLogado: User;

private userCollection: AngularFirestoreCollection<User>;

    constructor(private afs: AngularFirestore) {
      this.userCollection = this.afs.collection<User>("user");
     }

salvar(user: User) {
this.userCollection.add(user)
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

}
