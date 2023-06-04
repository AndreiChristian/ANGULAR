import { DataSource } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.scss'],
})
export class SeasonsComponent implements OnInit {
  displayedColumns: string[] = [
    'position',
    'driver',
    'constructor',
    'points',
    'wins',
  ];
  dataSource: ExampleDataSource;

  constructor(private http: HttpClient) {
    this.dataSource = new ExampleDataSource(http);
  }

  ngOnInit(): void {
    this.http
      .get('http://ergast.com/api/f1/2008/driverStandings.json')
      .subscribe((data: any) => {
        console.table(
          data.MRData.StandingsTable.StandingsLists[0].DriverStandings
        );
      });
  }
}

export class ExampleDataSource extends DataSource<PeriodicElement> {
  data = new BehaviorSubject<PeriodicElement[]>([]);

  constructor(private http: HttpClient) {
    super();
    this.fetchData();
  }

  fetchData() {
    this.http
      .get('http://ergast.com/api/f1/2008/driverStandings.json')
      .subscribe((data: any) => {
        const fetchedData: PeriodicElement[] =
          data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        this.data.next(fetchedData);
      });
  }

  connect(): Observable<PeriodicElement[]> {
    return this.data;
  }

  disconnect() {}
}
