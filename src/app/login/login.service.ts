import { HttpHeaders, HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Horta } from "../cadastro-horta/cadastroHorta.model";

const options = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token',
        "access-control-expose-headers": "Authorization",
        "Access-Control-Allow-Origin": "*"
    })
}

@Injectable()
export class LoginService {

    constructor(private http: HttpClient) { }

    postUser(usuario: object): Observable<any> {
        return this.http.post<any>(`http://localhost:3000/auth/login`, JSON.stringify(usuario), options)
    }

    postUserGoogle(usuario: object): Observable<any> {
        return this.http.get<any>(`http://localhost:3000/auth/google`)
    }
}