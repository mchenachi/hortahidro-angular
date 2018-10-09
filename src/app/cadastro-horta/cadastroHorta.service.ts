import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Horta } from "./cadastroHorta.model";
import { MediaHorta } from "./mediaHorta.model";


const options = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
}

@Injectable()
export class HortaService{

    constructor(private http: HttpClient){}

    postHortas(horta: Horta): Observable<Horta>{
        return this.http.post<Horta>(`http://localhost:3000/horta`, JSON.stringify(horta), options)
    }

    getHortas(): Observable<Horta[]>{
        return this.http.get<Horta[]>(`http://localhost:3000/horta`)
    }

    postMediaHorta(mediaHorta: MediaHorta): Observable<MediaHorta>{
        return this.http.post<MediaHorta>(`http://localhost:3000/mediaHorta`, JSON.stringify(mediaHorta), options)
    }

}