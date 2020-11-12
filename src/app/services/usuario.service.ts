import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';
import { map } from 'rxjs/operators';
import { Usuario } from '../models/usuario.interface';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuarioCollection: AngularFirestoreCollection<Usuario>;
  private usuario: Observable<Usuario[]>;

  constructor(db: AngularFirestore, private cookieService: CookieService) { 
    this.usuarioCollection = db.collection<Usuario>('usuario');
    this.usuario = this.usuarioCollection.snapshotChanges().pipe(map(
      actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      }
    ));
  }

  addUsuario(usuario:Usuario){
    return this.usuarioCollection.add(usuario);
  }

  getUsuarios(){
    return this.usuario;
  }

  getUsuario(id:string){
    return this.usuarioCollection.doc<Usuario>(id).valueChanges();
  }

  updateUsuario(todo: Usuario, id:string){
    return this.usuarioCollection.doc(id).update(todo);
  }

  removeUsuario(id:string){
    return this.usuarioCollection.doc(id).delete();
  }
}
