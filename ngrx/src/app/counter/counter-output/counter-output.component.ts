import { Component, Input, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent implements OnInit {

  counter$:Observable<number>

  constructor(private counterService: CounterService) {}

  ngOnInit(): void {
    this.counter$ = this.counterService.counter$
  }
}
