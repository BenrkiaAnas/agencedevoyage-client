import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PlanningService {

    host = `http://localhost:8000/`;

    constructor(private http: HttpClient) {
    }

    getPlanningandVoyage(): Observable<any> {
        return this.http.get(this.host + 'planning/pv');
    }
    getPlanningandVoyageById(id: number): Observable<any> {
        return this.http.get(this.host + 'planning/pv/' + id);
    }
}
