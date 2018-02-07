import {Http,Response,Headers,RequestOptions} from '@angular/http'
import {Injectable} from '@angular/core'
import { Observable } from 'rxjs/Rx'
import {ipfsData} from './data.type'
@Injectable() export class dataService{
    result:any
    constructor(private _http:Http){

    }
    getdata(data):Observable<ipfsData>{
        let headers=new Headers({
            'Content-Type':'application/json'
        })
        let options=new RequestOptions({headers:headers})
        return this._http.post('/api/ipfs/add',JSON.stringify(data),options).map(
          (event:Response)=>{
            return <ipfsData>event.json()
          }
        ).catch(this.handleError)
    }
    private handleError(error:Response){
        return Observable.throw(error.statusText)
    }
}