import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class VoyageOrganiseService {

    host = `http://localhost:8000/`;

    constructor(private http: HttpClient) {
    }

    getAllVoyages(): Observable<any> {
        return this.http.get(this.host + 'voyage/');
    }
}
