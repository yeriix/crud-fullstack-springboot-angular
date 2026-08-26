import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Ejemplo } from './app/ejemplo/ejemplo';

bootstrapApplication(Ejemplo, appConfig)
  .catch((err) => console.error(err));
