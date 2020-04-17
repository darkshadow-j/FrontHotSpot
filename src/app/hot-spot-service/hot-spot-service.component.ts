import {Component, OnInit} from '@angular/core';
import {HotSpotUsluga, ProfileService} from '../services/profile.service';

@Component({
  selector: 'app-hot-spot-service',
  templateUrl: './hot-spot-service.component.html',
  styleUrls: ['./hot-spot-service.component.css']
})
export class HotSpotServiceComponent implements OnInit {

  uslugi: HotSpotUsluga[];

  constructor(private profileService: ProfileService,) {
  }

  ngOnInit(): void {
    this.profileService.getAllHSService().subscribe(value => {
      this.uslugi = value;
    });
  }

}
