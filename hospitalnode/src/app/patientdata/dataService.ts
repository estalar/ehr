import {Http} from '@angular/http'
import {Injectable} from '@angular/core'
@Injectable() export class dataService{
    result:any
    constructor(private _http:Http){

    }
    return this._http.post('/api/ipfs/get').map(result=>this.result=result.json().data)
}