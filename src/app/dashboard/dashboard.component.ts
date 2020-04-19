import {Component, OnInit} from '@angular/core';
import {PortList, ProfileService, Router} from '../services/profile.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {inspect} from 'util';
import {PowiadomienieComponent} from '../powiadomienie/powiadomienie.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  routersCount: number;
  dataSource: any;
  unavaiableRouters: Router[];

  messages = [
    {
      text: 'Brak Skonfigurowanych routerów',
    }
  ];

  constructor(private service: ProfileService, private snackBar: PowiadomienieComponent) {
  }

  ngOnInit(): void {
    this.service.getRoutersCount().subscribe(value => {
      this.routersCount = value;
      if (this.routersCount <= 0) {
        this.snackBar.openSnackBar(this.messages, 'Close', 'red-snackbar');
      }
    });

    console.log(this.routersCount);

    this.service.getRoutersList().subscribe(value => {
      /*   this.dataSource = value;*/
    });
    this.service.getUnAvailableRouters().subscribe(value => {
      this.unavaiableRouters = value;
    });


  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
];

/*const ELEMENT3_DATA: RouterModelnew[] = [
  {name: 'sss', ipAdress: 'ssss', username: 'user', password: 'sss', portList: null}
];*/


@Component({
  selector: 'app-powiadomienia',
  templateUrl: 'powiadomienia.component.html',
})
export class PowiadomieniaComponent {
}

@Component({
  selector: 'app-powiadomienia-router',
  templateUrl: 'router-powiadomienia.component.html',
})
export class RouterPowiadomieniaComponent {
}
