import {Component, OnInit} from '@angular/core';
import {Profiles, ProfileService, UserProfile} from '../services/profile.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  userProfile: UserProfile;

  constructor(private profileService: ProfileService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.profileService.getUserProfile().subscribe(value => {
      this.userProfile = value;
      console.log(this.userProfile);
    });
  }

  editUserProfile(value: string) {
    const prof: UserProfile = ({
      id: this.userProfile.id,
      name: this.userProfile.name,
      sessionTimeout: value,
  });
    this.profileService.editUserProfile(prof).subscribe();
  }
}
