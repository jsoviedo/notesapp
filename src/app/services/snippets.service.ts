import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';

@Injectable()

export class SnippetService {

    public url: string;

    constructor(
        private _http: HttpClient
    ){  
        this.url = "Backend Service";
      }

    getSnippets(){
        return this._http.get(this.url);
    }
}