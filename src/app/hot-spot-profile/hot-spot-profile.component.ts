import {Component, EventEmitter, Injectable, OnInit, Output} from '@angular/core';
import {Profiles, ProfileService} from '../services/profile.service';
import {ProfileToEdit} from '../edit-profile/edit-profile.component';

@Component({
  selector: 'app-hot-spot-profile',
  templateUrl: './hot-spot-profile.component.html',
  styleUrls: ['./hot-spot-profile.component.css']
})
export class HotSpotProfileComponent implements OnInit {

  @Output() messageEvent = new EventEmitter<string>();
  profileToEdit: Profiles;
  profiles: Profiles[];
  message = 'sss';
  profilee: ProfileToEdit;

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

  public setProfileToEdit(profile: Profiles) {
    this.profilee = ProfileToEdit.getInstance();
    this.profilee.setProfile(profile);
    console.log('teraz' + profile.name);
  }


  deleteProfile(profile: Profiles) {

  }
}
