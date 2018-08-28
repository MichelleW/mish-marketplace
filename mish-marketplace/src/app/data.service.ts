import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http:HttpClient ) { }

  // getProducts(){
  //   return this._http.get('')
  // }


  addNewItem(newItemObj){
    console.log('new item :', newItemObj);
    return this._http.post('/api/listing-new', newItemObj)
  }


  getAllItems(){
    console.log('log from getAllItem :');
    return this._http.get('/api/listing');
  }


}
