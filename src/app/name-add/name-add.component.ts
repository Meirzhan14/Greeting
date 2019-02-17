import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NameService} from '../name.service';
import {Greeting} from '../Greeting';

@Component({
  selector: 'app-name-add',
  templateUrl: './name-add.component.html',
  styleUrls: ['./name-add.component.css']
})
export class NameAddComponent implements OnInit {

  angForm: FormGroup;
  result: String;
  constructor(private fb: FormBuilder, private ns: NameService) {
    this.createForm();
  }


  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
    });
  }

  addName(name) {
    this.ns.addName(name).subscribe(() => this.load());;
  }

  load(){
    this.ns
      .getName()
      .subscribe((data: Greeting) => {
        this.result = data.name;
      });
  }

  ngOnInit() {
     this.load();
  }

}
