import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HotSpotUsluga, Profiles, ProfileService} from '../services/profile.service';

@Component({
  selector: 'app-addservice',
  templateUrl: './addservice.component.html',
  styleUrls: ['./addservice.component.css']
})
export class AddserviceComponent implements OnInit {
  form: FormGroup;
  profiles: Profiles[];
  selectedProfile: Profiles;

  constructor(private profileService: ProfileService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      test: ['']
    });
    this.profileService.getProfilesList().subscribe(value => {
      this.profiles = value;
    });
  }

  addHSServoce(nazwa: HTMLInputElement) {

    const hotSpotUsluga: HotSpotUsluga = ({
      name: nazwa.value,
      profile: this.selectedProfile
    });
    console.log(hotSpotUsluga)
    this.profileService.addHSUsluga(hotSpotUsluga).subscribe();
  }

  setNewUser(profile: Profiles): void {
    console.log(profile.name);
  }
}
