import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FbAuthResponce, Reg, User} from '../../admin/shared/interfaces';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {tap} from 'rxjs/operators';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    public afAuth: AngularFireAuth,
    private http: HttpClient) {
  }

  get token(): string {
    return ''
  }

  login(user: User): Observable<any> {
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
      .pipe(
        tap(this.setToken)
      )
  }

  register(email, password) {
  // register(reg: Reg): Observable<any> {
    // return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environmentTest.apiKey}`, reg)
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        window.alert('You have been successfully registered!');
        console.log(result.user)
      }).catch((error) => {
        window.alert(error.message)
      })
      // .pipe(
      //   tap(this.setToken)
      // )

  }

  logout() {

  }

  isAuthenticated(): boolean {
    return !!this.token

  }

  private setToken(response: FbAuthResponce) {
    console.log(response);
  }
}

