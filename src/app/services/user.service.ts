import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../modeles/user';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  host = `${environment.URL}`;
  urlLink = 'http://localhost:4200/sign-up/confirmation/';

  constructor(private http: HttpClient,
              private router: Router) {
  }

  inscription(user: User): Observable<any> {
    return this.http.post(this.host + 'user/inscription', user);
  }

  sendMailActivation(user: User): Observable<any> {
    return this.http.post(this.host + 'user/activation', {'email': user.email, 'urlLink': this.urlLink});
  }

  confirmationUserAcount(cle): Observable<any> {
    return this.http.get(this.host + 'user/activation/' + cle);
  }
}
