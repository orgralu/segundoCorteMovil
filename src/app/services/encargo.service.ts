import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';
import { map } from 'rxjs/operators';
import { Encargo } from '../models/encargo.interface';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class EncargoService {
  private encargoCollection: AngularFirestoreCollection<Encargo>;
  private encargo: Observable<Encargo[]>;

  constructor(db: AngularFirestore, private cookieService: CookieService) { 
    this.encargoCollection = db.collection<Encargo>('encargo');
    this.encargo = this.encargoCollection.snapshotChanges().pipe(map(
      actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      }
    ));
  }

  addEncargo(encargo:Encargo){
    return this.encargoCollection.add(encargo);
  }

  getEncargos(){
    return this.encargo;
  }

  getEncargo(id:string){
    return this.encargoCollection.doc<Encargo>(id).valueChanges();
  }

  updateEncargo(todo: Encargo, id:string){
    return this.encargoCollection.doc(id).update(todo);
  }

  removeEncargo(id:string){
    return this.encargoCollection.doc(id).delete();
  }

}
