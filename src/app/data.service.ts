import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IDriver, IHistory, IGet, ICar, IBar, Ifar } from 'src/assets/Driver';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  private _url:string = "/assets/data/drivers.json"
  private _Krl:string = "http://104.211.60.175/request_API/public/api/trip_history"
  private _URL:string = "assets/data/history.json"
  private _RL:string = "http://104.211.60.175/request_API/public/api/drivers"
  private _Gl:string = "http://104.211.60.175/request_API/public/api/getallcars"
  private _gl:string = "http://104.211.60.175/request_API/public/api/postcar"
  private _Hl:string = "http://104.211.60.175/request_API/public/api/new_trips"
 private  _Bl:string = "http://104.211.60.175/request_API/public/api/login"
 private _Approved: string = "http://104.211.60.175/request_API/public/api/approve_request"
 column_id = localStorage.getItem('column_id');
 private _Reject: string ="http://104.211.60.175/request_API/public/api/reject_request"



  headers = new HttpHeaders().set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .set('responseType', 'text')
    .set('Access-Control-Allow-Origin', '*');

  constructor(private http: HttpClient) { }

  public _refresh = new Subject<void>();

  get _refresh$(){
    return this._refresh;
  }

  getDrivers(): Observable<IDriver[]>{
    return this.http.get<IDriver[]>(this._RL);
  }


  getHistory(): Observable<Ifar[]>{
    return this.http.get<Ifar[]>(this._Krl);
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

getHis(): Observable <IBar[]>{
  return this.http.get<IBar[]>(this._Hl)
}

login(data: any) {
  return this.http.post(this._Bl, JSON.stringify(data),({ headers: this.headers }));
  }

  approved(data: any){

    return this.http.post(`${this._Approved}/${this.column_id}`, JSON.stringify(data), ({headers: this.headers}))
    .pipe(
      tap(()=> {
        this._refresh.next();
      })
    );
  }
  reject(data:any){
   
    return this.http.post(`${this._Reject}/${this.column_id}`, JSON.stringify(data), ({headers:this.headers}))
    .pipe(
      tap(()=> {
        this._refresh.next();
      
      })
    );
  
    }


}
