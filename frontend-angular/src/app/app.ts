import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomerList } from '../app/components/customer-list/customer-list';

@Component({
  imports: [RouterOutlet, CustomerList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('frontend-angular');
}
