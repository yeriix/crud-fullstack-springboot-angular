import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomerList } from '../app/components/customer-list/customer-list';
import {FormsModule} from '@angular/forms';

@Component({
  imports: [CustomerList, FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('frontend-angular');
}
