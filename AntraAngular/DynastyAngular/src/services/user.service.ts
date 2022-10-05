import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) {

    }
    ProceedLogin(inputdata: any) {
        return this.http.post('https://localhost:7139/login?Username=wizard%40dnd.com&Password=1%40Dndbeyond', inputdata)
    }

    IsLoggedIn() {
        return localStorage.getItem('token') != null;
    }

    GetToken() {
        return localStorage.getItem('token') != null ? localStorage.getItem('token') : '';
    }

    Registeration(inputdata: any) {
        return this.http.post('https://localhost:7139/signup', inputdata)
    }
}
