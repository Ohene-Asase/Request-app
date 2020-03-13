import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signedin = this.formbuilder.group({
    email: '',
    password: ''
  })
  


  constructor(
    private router:Router,
    private formbuilder: FormBuilder,
    private _dataservice: DataService,
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

login(FormData:any){
  this._dataservice.login(FormData).subscribe(
    (res: any) => {
      if(res) {
        this.router.navigate(['./home/overview']);
        localStorage.setItem('userData',res.data.id.token)
        localStorage.setItem('id', res.data.id);
        console.log(res.data.id)
      }
    }

    
  )

  
  
}


}
