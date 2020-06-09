import { Component, OnInit } from '@angular/core';
import { MonWookie } from '../core/models/mon-wookie';

@Component({
  selector: 'app-test-tdf',
  templateUrl: './test-tdf.component.html',
  styleUrls: ['./test-tdf.component.css']
})
export class TestTdfComponent implements OnInit {
  monWookie: MonWookie = new MonWookie(1, 'Chewie', 200);

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    console.log('save', this.monWookie);
  }

}
