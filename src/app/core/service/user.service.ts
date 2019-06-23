import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../../class/user';

@Injectable()
export class UserService {

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase
  ) { }

  create(email: string, password: string): void {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(user => {
        this.db.object(`/users/${user.user.uid}`).set(new User(user));
        this.router.navigate(['/users/new']);
      })
      .catch(error => console.error(error));
  }

  update(values): void {
    this.afAuth.auth.currentUser.updateProfile(values)
      .then(() => {
        this.db.object(`/users/${this.afAuth.auth.currentUser.uid}`).update(values);
        this.router.navigate(['/']);
      })
      .catch(error => console.error(error));
  }
}
