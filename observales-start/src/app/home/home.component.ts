import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { count } from 'rxjs-compat/operator/count';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription;

  constructor() {}

  ngOnInit() {
    // this.firstObsSubscription = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });
    const customInterval = Observable.create((observer) => {
      let count = 0;

      setInterval(() => {
        observer.next(count);
        if (count == 2) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('Count is greater than 3'));
        }
        count++;
      }, 1000);
    });

    this.firstObsSubscription = customInterval.subscribe(
      (data) => console.log(data),
      (error) => {
        alert(error.message);
      },
      () =>{
        console.log("the oberserv")
      }
    );
  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }
}
