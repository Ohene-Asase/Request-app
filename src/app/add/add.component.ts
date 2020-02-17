import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {FormGroup, FormControl,Validators} from '@angular/forms'
import { DataService } from '../data.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<AddComponent>,
              private _dataservice:DataService
  ) { }

  form:FormGroup = new FormGroup({
    car_brand:new FormControl('',Validators.required),
    car_model:new FormControl('',Validators.required), 
    car_no: new FormControl('',Validators.required)
  })

  ngOnInit() {
  }
    Close(){
      this.dialogRef.close();
    }

add(formdata:any){
  console.log(formdata);
  this._dataservice.addCar(formdata).subscribe(
    (res:any)=>{
      if(res){
        console.log("correct")
      }

    }
  )
  
}

reset(){
  this.form.reset()
}

}
