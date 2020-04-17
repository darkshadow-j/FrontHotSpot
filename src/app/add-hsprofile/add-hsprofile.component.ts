import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Profiles, ProfileService} from '../services/profile.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-hsprofile',
  templateUrl: './add-hsprofile.component.html',
  styleUrls: ['./add-hsprofile.component.css']
})
export class AddHSProfileComponent implements OnInit {
  form: FormGroup;

  constructor(private profileService: ProfileService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      test: ['']
    });
  }


  addProfile(value: string, value2: string, value3: string) {
    const prof: Profiles = ({
      name: value,
      dnsName: value2,
      rateLimit: value3,
    });
    this.profileService.addOneProfile(prof).subscribe();
  }
}
