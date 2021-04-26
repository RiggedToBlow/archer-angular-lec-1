import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReactService {

  constructor(
    private http:HttpClient
  ) { }
  getData(){
    return this.http.get<Data>('https://sp-today.com/app_api/cur_damascus.json?1619431002498')
  }
  getDataByAsk(){
    return this.getData().pipe(
      map(val=>{val.name})
    )
  }
}
interface Data
{
  "name":string,
  "ask":string,
  "bid":string,
  "arrow":string,
  "ar_name":string,
  "icon":string,"change":string,
  "change_percentage":string
}
