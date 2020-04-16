import {Component, OnInit} from '@angular/core';
import {ProfileService, RouterModel, RouterModelnew} from '../services/profile.service';

@Component({
  selector: 'app-routers',
  templateUrl: './routers.component.html',
  styleUrls: ['./routers.component.css']
})
export class RoutersComponent implements OnInit {

  routerModel: RouterModel[];
  ssss: RouterModelnew[];

  constructor(private service: ProfileService) {
  }

  ngOnInit(): void {
    this.service.getRoutersList().subscribe(value => {
      this.ssss = value;
    });
  }

  addRouter(value: string, value2: string, value3: string, value4: string) {
    const router: RouterModel = ({
      name: value,
      ipAdress: value2,
      password: value3,
      username: value4
    });
    this.service.addRouter(router).subscribe();
   /* this.service.getRoutersList().subscribe(value1 => this.routerModel = value1);*/
  }
}
