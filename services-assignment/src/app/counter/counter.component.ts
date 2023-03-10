import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  counter: number;

  constructor(private counterService: CounterService) {}

  ngOnInit(): void {
    this.counter = this.counterService.counter;
  }
}
