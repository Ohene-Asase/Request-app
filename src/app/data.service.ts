import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IDriver, IHistory, IGet, ICar } from 'src/assets/Driver';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _url:string = "/assets/data/drivers.json"
  private _URL:string = "assets/data/history.json"
  private _RL:string = "http://104.211.60.175/request_API/public/api/drivers"
  private _Gl:string = "http://104.211.60.175/request_API/public/api/getallcars"
  private _gl:string = "http://104.211.60.175/request_API/public/api/postcar"
  headers = new HttpHeaders().set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .set('responseType', 'text')
    .set('Access-Control-Allow-Origin', '*');

  constructor(private http: HttpClient) { }

  getDrivers(): Observable<IDriver[]>{
    return this.http.get<IDriver[]>(this._url);
  }


  getHistory(): Observable<IHistory[]>{
    return this.http.get<IHistory[]>(this._URL);
  }

 getReal(): Observable <IGet[]>{
   return this.http.get<IGet[]>(this._RL)
}

getCars(): Observable <ICar[]>{
  return this.http.get<ICar[]>(this._Gl)
}

addCar(data:any){
  return this.http.post(this._gl, JSON.stringify(data), ({headers:this.headers}));
}


}
