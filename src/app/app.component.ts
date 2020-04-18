import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Profiles} from './services/profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mainFrontApp';

  ngOnInit(): void {
  }
}


