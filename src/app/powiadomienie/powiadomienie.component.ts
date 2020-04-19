import {Component, Injectable, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-powiadomienie',
  templateUrl: './powiadomienie.component.html',
  styleUrls: ['./powiadomienie.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class PowiadomienieComponent implements OnInit {

  timeOut = 30000;

  constructor(
    public snackBar: MatSnackBar
  ) {
  }


  openSnackBar(message, action: string, className: string) {


    if (message instanceof Array) {

      message.forEach((message, index) => {

        setTimeout(() => {

          this.snackBar.open(message.text, action, {
            duration: this.timeOut,
            verticalPosition: 'bottom', // 'top' | 'bottom'
            horizontalPosition: 'end',
            panelClass: [className],
          });


        }, index * (this.timeOut + 500)); // 500 - timeout between two messages

      });


    } else {

      this.snackBar.open(message.text, action, {
        duration: this.timeOut,
        verticalPosition: 'bottom', // 'top' | 'bottom'
        horizontalPosition: 'end', //'start' | 'center' | 'end' | 'left' | 'right';
        panelClass: [className],
      });

    }


  }

  ngOnInit() {
  }

}
