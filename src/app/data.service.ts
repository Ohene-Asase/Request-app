import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDriver, IHistory } from 'src/assets/Driver';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _url:string = "/assets/data/drivers.json"
  private _URL:string = "assets/data/history.json"

  constructor(private http: HttpClient) { }

  getDrivers(): Observable<IDriver[]>{
    return this.http.get<IDriver[]>(this._url);
  }


  getHistory(): Observable<IHistory[]>{
    return this.http.get<IHistory[]>(this._URL);
  }

}
