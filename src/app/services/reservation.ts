import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ReservationModel} from '../modeles/reservation';

@Injectable({
    providedIn: 'root'
})
export class ReservationService {

    host = `http://localhost:8000/`;

    constructor(private http: HttpClient) {
    }
    createReservation(id: number, reservation: ReservationModel): Observable<any> {
        return this.http.post(this.host + 'reservation/add/' + id, reservation);
    }
    getOneReservation(id: number): Observable<any> {
        return this.http.get(this.host + 'reservation/' + id);
    }
    validerReservation(id: number, reservation: ReservationModel): Observable<any> {
        return this.http.put(this.host + 'reservation/valide/' + id, reservation);
    }
}
