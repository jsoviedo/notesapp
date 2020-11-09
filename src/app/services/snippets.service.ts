import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';

@Injectable()

export class SnippetService {

    public url: string;

    constructor(
        private _http: HttpClient
    ){  
        this.url = "http://127.0.0.1:3000/api/snippets";
      }

    getSnippets(){
        return this._http.get(this.url);
    }

    /*createSnippet() {
        return this._http.post(this.url); 
    }*/
}