import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, timeout } from 'rxjs/operators';
import { environment } from "../../environments/environment.prod";
import { Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class SmtpService {
    private url = environment.apiUrl;

    constructor(private httpClient: HttpClient){}

    EmailService(contatForm: any): Observable<any> {
        return this.httpClient.post<any>(`${this.url}/api/Email`, contatForm);
    }
}
