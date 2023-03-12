import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { count } from 'rxjs-compat/operator/count';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    interval(1000).subscribe((count) => {
      console.log(count);
    });
  }
}
