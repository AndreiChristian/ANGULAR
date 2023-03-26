import { inject, Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  Firestore,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { Exercise } from './exercise.model';

@Injectable({
  providedIn: 'root',
})
export class TrainingService {
  firestore: Firestore = inject(Firestore);
  availableExercises$: Observable<any[]>;

  exercisesFetched = new Subject<Exercise[]>();

  private runningExercise: Exercise;
  private exercises: Exercise[] = [];

  exerciseChanged = new Subject<Exercise>();

  private availableExercises: Exercise[] = [];

  constructor() {
    const aCollection = collection(this.firestore, 'availableExercises');
    this.availableExercises$ = collectionData(aCollection, {
      idField: 'id',
    });
    this.availableExercises$.subscribe((exercises) => {
      this.availableExercises = exercises;
      this.exercisesFetched.next([...this.availableExercises]);
    });
  }

  fetchAvailableExercises() {
    return this.availableExercises;
  }

  startExercise(selectedId: string) {
    console.log(selectedId);
    this.runningExercise = this.availableExercises.find(
      (ex) => ex.id === selectedId
    );
    this.runningExercise = this.availableExercises.find(
      (ex) => ex.id === selectedId
    );

    this.exerciseChanged.next({ ...this.runningExercise });
  }

  getRunningExercise() {
    return {
      ...this.runningExercise,
    };
  }

  completeExercise() {
    this.addDataToDatabase({
      ...this.runningExercise,
      date: new Date(),
      state: 'completed',
    });
    this.runningExercise = null;
    this.exerciseChanged.next(null);
  }

  cancelExercise(progress: number) {
    this.addDataToDatabase({
      ...this.runningExercise,
      duration: this.runningExercise.duration * (progress / 100),
      calories: this.runningExercise.calories * (progress / 100),
      date: new Date(),
      state: 'canceled',
    });
    this.runningExercise = null;
    this.exerciseChanged.next(null);
  }

  getPastExercies() {
    return this.exercises.slice();
  }

  addDataToDatabase(exercise: Exercise) {
    addDoc(collection(this.firestore, 'finishedExercises'), exercise);
  }
}

