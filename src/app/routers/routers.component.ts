import {Component, OnInit} from '@angular/core';
import {ProfileService, Router, RouterModel} from '../services/profile.service';

@Component({
  selector: 'app-routers',
  templateUrl: './routers.component.html',
  styleUrls: ['./routers.component.css']
})
export class RoutersComponent implements OnInit {

  routers: Router[];

  constructor(private service: ProfileService) {
  }

  ngOnInit(): void {
    this.service.getRoutersList().subscribe(value => {
      this.routers = value;
    });
  }


}
