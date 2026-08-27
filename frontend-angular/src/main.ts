import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Ejemplo } from './app/ejemplo/ejemplo';
import {CustomerList} from './app/components/customer-list/customer-list';
import {CustomerAdd} from './app/components/customer-add/customer-add';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
