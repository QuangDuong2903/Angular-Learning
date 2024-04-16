import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import IUser from '../models/user.models';
import { Observable, delay, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userCollection: AngularFirestoreCollection<IUser>
  public isAuthenticated$: Observable<boolean>
  public isAuthenticatedWithDelay$: Observable<boolean>

  constructor(private auth: AngularFireAuth, private db: AngularFirestore) {
    this.userCollection = this.db.collection('users')
    this.isAuthenticated$ = this.auth.user.pipe(
      map(user => !!user)
    )
    this.isAuthenticatedWithDelay$ = this.isAuthenticated$.pipe(delay(1000))
  }

  public async createUser(userData: IUser) {
    const userCredential = await this.auth.createUserWithEmailAndPassword(
      userData.email as string, userData.password as string)

    if (!userCredential.user)
      throw new Error('User cannot be found')

    await this.userCollection.doc(userCredential.user.uid).set({
      name: userData.name,
      email: userData.email,
      age: userData.age,
      phoneNumber: userData.phoneNumber
    })

    await userCredential.user.updateProfile({
      displayName: userData.name
    })
  }
}
