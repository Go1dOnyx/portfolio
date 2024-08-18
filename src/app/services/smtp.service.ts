import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class SmtpService {
    private url = '/api/Email';

    constructor(private httpClient: HttpClient){}

    EmailService(contatForm: any): Observable<any> {
        return this.httpClient.post<any>(`${this.url}`, contatForm);
    }
}
/* 
private url = 'https://localhost:7122/api/Email';
*/