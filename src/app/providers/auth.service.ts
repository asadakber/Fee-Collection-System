import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private db: AngularFireDatabase,private router: Router,private afauth: AngularFireAuth,private afs: AngularFirestore) { }

  getUser() {
    this.afauth.authState.subscribe((user) => {
      if(user) {
        this.db.list(`/users/${user.uid}`).snapshotChanges(['child_added'])
        .subscribe(snap => {
          snap.forEach(snapshot => {
            if(snapshot.payload.val()['usertype'] === "user") {
              this.router.navigate(['/dashboard'])
            }
            else {
              this.router.navigate(['/login'])
            }
          })
        })
      }
    })
  }

  signup(user) {
    return this.afauth.auth.createUserWithEmailAndPassword(user.email, user.password)
    .then((success) => {
      let uid = this.afauth.auth.currentUser.uid
      this.db.list(`/users/${uid}`).push({
        firstname: user.firstname,
        lastname: user.lastname,
        username: user.username,
        email: user.email,
        password: user.password,
        confirmPassword: user.confirmPassword,
        usertype: user.usertype

      })
      this.router.navigate(['/login'])
    })
    .catch((error) => {
      alert(error)
    })
  }

  signin(user) {
    return this.afauth.auth.signInWithEmailAndPassword(user.email, user.password)
    .then((success) => {
      let adminuid = this.afauth.auth.currentUser.uid
      if(adminuid === 'xBy3ps42g9Pe3tPNLL2JKfQCwRk2') {
        this.router.navigate(['/admin'])
      }
      else {
        this.getUser()
      }
    })
    .catch((error) => {
      alert(error)
    })
  }

  signout() {
    return this.afauth.auth.signOut()
    .then((success) => {
      this.router.navigate(['/login'])
    })
    .catch((error) => {
      alert(error)
    })
  }
}
