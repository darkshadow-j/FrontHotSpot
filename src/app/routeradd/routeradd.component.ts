import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Profiles, ProfileService, Router} from '../services/profile.service';

@Component({
  selector: 'app-routeradd',
  templateUrl: './routeradd.component.html',
  styleUrls: ['./routeradd.component.css']
})
export class RouteraddComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private service: ProfileService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      test: ['']
    });
  }

  addRouter(nazwa: HTMLInputElement, username: HTMLInputElement, password: HTMLInputElement, ip: HTMLInputElement) {
    console.log(nazwa.value);
    const router: Router = ({
      name: nazwa.value,
      ipAddress: ip.value,
      username: username.value,
      password: password.value,
      portList: []
    });
    this.service.addRouter(router).subscribe();

  }
}
