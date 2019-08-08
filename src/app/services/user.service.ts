import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private angularFireDataBase: AngularFireDatabase) {
  }
  getUsers () {
    return this.angularFireDataBase.list('/users')
  }
  getUserById(uid: string) {
    return this.angularFireDataBase.object('/users/' + uid)
  }
  createUser (user) {
    return this.angularFireDataBase.object('/users/' + user.uid).set(user)
  }
  editUser (user) {
    return this.angularFireDataBase.object('/users/' + user.uid).set(user)
  }
}
