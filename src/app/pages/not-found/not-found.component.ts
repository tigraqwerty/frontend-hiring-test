import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  host: {
    class: 'router-container',
  },
})
export class NotFoundComponent {
  constructor(private _router: Router) {}

  public goBack(): void {
    this._router.navigate(['/login']);
  }
}
