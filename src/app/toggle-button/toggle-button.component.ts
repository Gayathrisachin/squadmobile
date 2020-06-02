import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Fake } from '../models/fake.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FakeService } from '../services/fake.service';

@Component({
  selector: 'toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.css']
})
export class ToggleButtonComponent implements OnInit {
 
  constructor() {}
    

  ngOnInit() {
  

}
  }