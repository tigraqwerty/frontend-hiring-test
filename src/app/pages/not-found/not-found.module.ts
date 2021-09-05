import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';

import { NotFoundComponent } from './not-found.component';
import { NotFoundRoutes } from './not-found.routing';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [CommonModule, MatButtonModule, NotFoundRoutes],
})
export class NotFoundModule {}
