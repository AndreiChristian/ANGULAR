import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { collection } from '@firebase/firestore';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { Exercise } from '../exercise.model';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css'],
})
export class NewTrainingComponent implements OnInit {
  exercises: Exercise[];
  firestore: Firestore = inject(Firestore);
  exerciseSubscription: Subscription;

  constructor(private trainingService: TrainingService) {}

  ngOnInit() {
    this.exerciseSubscription = this.trainingService.exercisesFetched.subscribe(
      (exercises) => {
        this.exercises = exercises;
      }
    );
    this.trainingService.fetchAvailableExercises();
  }

  onStartTraining(from: NgForm) {
    this.trainingService.startExercise(from.value.exerciseSelected);
  }

  ngOnDestroy() {
    if (this.exerciseSubscription) {
      this.exerciseSubscription.unsubscribe();
    }
  }
}
