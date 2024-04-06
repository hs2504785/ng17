import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ng17';

  users = [
    {
      name: 'hemant',
      age: 20,
    },
    {
      name: 'hemant 1',
      age: 78,
    },
    {
      name: 'vinay',
      age: 3,
    },
    {
      name: 'mark',
      age: 45,
    },
  ];
}
