import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  name = 'Dimitris';

  person = {
    givenName: 'Dimitris',
    surName: 'Serafeimidis',
    age: 37,
    email: 'dimserafeim@aueb.gr',
  };
}