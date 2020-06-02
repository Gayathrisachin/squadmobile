import { Component, OnInit, Input } from '@angular/core';
import { Fake } from 'src/app/models/fake.model';
import { FakeService } from 'src/app/services/fake.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Log{
  Date:string;
  punchIn:string
  punchOut:string
  }
export interface DateHeader{
  name:string
}
@Component({
  selector: 'app-log-info',
  templateUrl: './log-info.component.html',
  styleUrls: ['./log-info.component.css']
})


export class LogInfoComponent implements OnInit {
log:Fake[]
form:FormGroup
@Input() child: boolean;
today=new Date();
public DateDetails: object = [];  

public DateHeader = [{ name: 'This Week' }];  

  filteredStates$: any;
  constructor(private svc:FakeService,private fb:FormBuilder) { 
    this.getDate()
  
  }

  ngOnInit() {

    this.form=this.fb.group({
      name:''
    })
    this.svc.getAll().subscribe(data=>{
      this.log=data
    });
  }
getDate(){
  return this.DateHeader;
}

}
