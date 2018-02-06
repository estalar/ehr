import {Http} from '@angular/http'
import {Injectable} from '@angular/core'
import { RequestOptions } from '@angular/http/src/base_request_options';
@Injectable() export class dataService{
    result:any
    constructor(private _http:Http){

    }
    getdata(data){
        let headers=new Headers({
            'Content-Type':'application/json'
        })
        let options=new RequestOptions({headers:headers})
        return this._http.post('/api/ipfs/get',JSON.stringify(data)).map
    }
}