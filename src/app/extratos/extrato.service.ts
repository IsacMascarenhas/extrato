import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = "http://localhost:8082"

@Injectable({providedIn: "root"})
export class ExtratoServie {
    constructor(private http: HttpClient) {}

    getUrlName(url: string) {
        return this.http.get<Object[]>(API + url);
    }
}