import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HotSpotUsluga, PortList, Profiles, ProfileService, Router} from '../services/profile.service';

@Component({
  selector: 'app-addservice',
  templateUrl: './addservice.component.html',
  styleUrls: ['./addservice.component.css']
})
export class AddserviceComponent implements OnInit {
  form: FormGroup;
  profiles: Profiles[];
  selectedProfile: Profiles;
  routers: Router[];
  selectedRouter: Router;
  ports: PortList[];
  selectedPort: PortList;
  constructor(private profileService: ProfileService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      test: ['']
    });
    this.profileService.getProfilesList().subscribe(value => {
      this.profiles = value;
    });
    this.profileService.getRoutersList().subscribe(value => {
      this.routers = value;
    });
  }

  addHSServoce(nazwa: HTMLInputElement) {

    const hotSpotUsluga: HotSpotUsluga = ({
      name: nazwa.value,
      profile: this.selectedProfile
    });
    console.log(hotSpotUsluga);
    console.log(this.selectedPort);
    this.profileService.addHSUsluga(hotSpotUsluga).subscribe();
  }

  setNewUser(profile: Profiles): void {
    console.log(profile.name);
  }

  getPorts() {
    this.ports = this.selectedRouter.portList;
    console.log(this.ports);
  }
}
