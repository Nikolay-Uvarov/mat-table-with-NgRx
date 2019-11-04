import { Component, OnInit } from '@angular/core';
import { GlobalState } from './store/states/global.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() { }

  public ngOnInit(): void { }

}
