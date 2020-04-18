import {Component, OnInit} from '@angular/core';
import {HotSpotProfileComponent} from '../hot-spot-profile/hot-spot-profile.component';
import {Profiles, ProfileService} from '../services/profile.service';
import {BehaviorSubject} from 'rxjs';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  editProfile: Profiles;
  form: FormGroup;

  constructor(private profileService: ProfileService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      test: ['']
    });
    console.log('dsad');
    console.log(ProfileToEdit.getInstance().getProfile().name);
    this.editProfile = ProfileToEdit.getInstance().getProfile();
  }


  editProfileRe(value: string, value2: string, value3: string) {
    const prof: Profiles = ({
      id: this.editProfile.id,
      name: value,
      dnsName: value2,
      rateLimit: value3,
    });
    this.profileService.editOneProfile(prof).subscribe();
  }
}

export class ProfileToEdit {
  private static instance: ProfileToEdit;
  private prof: Profiles;

  private constructor() {
  }

  static getInstance(): ProfileToEdit {
    if (!ProfileToEdit.instance) {
      ProfileToEdit.instance = new ProfileToEdit();
    }

    return ProfileToEdit.instance;
  }

  public setProfile(p: Profiles) {
    console.log('sssssssss' + p);
    this.prof = p;
  }

  public getProfile(): Profiles {
    return this.prof;
  }
}
