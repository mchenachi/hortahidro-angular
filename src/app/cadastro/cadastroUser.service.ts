import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CadastroUser } from "./cadastroUser.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";


const options = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
}

@Injectable()
export class UsuarioService {

    constructor(private http: HttpClient) { }

    postUsuario(usuario: CadastroUser): Observable<CadastroUser> {
        return this.http.post<CadastroUser>(`http://localhost:3000/cadastroUser`, JSON.stringify(usuario), options)
    }

    getUsuarios(): Observable<CadastroUser[]> {
        return this.http.get<CadastroUser[]>(`http://localhost:3000/cadastroUser`)
    }

}