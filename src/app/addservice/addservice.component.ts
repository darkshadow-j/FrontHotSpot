import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HotSpotUsluga, IpPool, PortList, Profiles, ProfileService, Profilex, Router, Usluga} from '../services/profile.service';
import {isPointerNearClientRect} from '@angular/cdk/drag-drop/client-rect';

@Component({
  selector: 'app-addservice',
  templateUrl: './addservice.component.html',
  styleUrls: ['./addservice.component.css']
})
export class AddserviceComponent implements OnInit {
  form: FormGroup;
  profiles: Profiles[];
  selectedProfile: Profilex;
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

  addHSServoce(nazwa: HTMLInputElement, ip: HTMLInputElement, pool: HTMLInputElement) {

    const ippoole: IpPool = ({
      name: 'x',
      ipPool: pool.value
    });
    const hotSpotUslugax: Usluga = ({
      name: nazwa.value,
      profile: this.selectedProfile,
      port: this.selectedPort,
      ipAdress: ip.value,
      ipPool: ippoole,
    });
    console.log(hotSpotUslugax);
    this.profileService.addHSUslugaa(hotSpotUslugax, this.selectedRouter).subscribe();
  }

  setNewUser(profile: Profiles): void {
    console.log(profile.name);
  }

  getPorts() {
    this.ports = this.selectedRouter.portList;
    console.log(this.ports);
  }
}
