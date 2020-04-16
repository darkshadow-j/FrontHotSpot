import {Component, OnInit} from '@angular/core';
import {Profiles, ProfileService} from '../services/profile.service';

@Component({
  selector: 'app-hot-spot-profile',
  templateUrl: './hot-spot-profile.component.html',
  styleUrls: ['./hot-spot-profile.component.css']
})
export class HotSpotProfileComponent implements OnInit {

  profiles: Profiles[];

  constructor(private profileService: ProfileService) {
  }

  ngOnInit(): void {
    this.profileService.getProfilesList().subscribe(value => {
      this.profiles = value;
    });
  }

  public addProfile(): void {
    this.profileService.addProfile().subscribe();
    this.profileService.getProfilesList().subscribe(value => {
      this.profiles = value;
    });
  }

}
