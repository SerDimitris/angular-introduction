import { Component } from '@angular/core';
import { PersonTableComponent } from './components/person-table/person-table.component';
import { Person } from './shared/interfaces/person';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  name = 'Dimitris';

  person0: Person = {
    givenName: 'Dimitris',
    surName: 'Serafeimidis',
    age: 37,
    email: 'dimserafeim@aueb.gr',
    address: 'Athens, Greece'
  };

  person1: Person = {
    givenName: 'Maria',
    surName: 'Zachari',
    age: 39,
    email: 'mariazachari@aueb.gr',
    address: 'Ilion, Greece'
  }
}