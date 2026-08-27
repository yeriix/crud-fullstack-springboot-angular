import { Routes } from '@angular/router';
import { CustomerList } from './components/customer-list/customer-list';
import { CustomerAdd } from './components/customer-add/customer-add';

export const routes: Routes = [
  { path: '', component: CustomerList },
  { path: 'customers/add', component: CustomerAdd },
];
