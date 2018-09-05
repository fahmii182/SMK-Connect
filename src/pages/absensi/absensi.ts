import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-absensi',
  templateUrl: 'absensi.html'
})
export class AbsensiPage {

  absensiItems: any[];

  constructor(public navCtrl: NavController) {
    this.absensiItems = [
      {
        user: {
          avatar: 'assets/img/marty-avatar.png',
          name: 'Paijem'
        },
        content: 'Test Test Test Test Test Test Test Test Test Test',
      },
      {
        user: {
          avatar: 'assets/img/sarah-avatar.png.jpeg',
          name: 'Sule'
        },
        content: 'Test Test '
      },
      {
        user: {
          avatar: 'assets/img/ian-avatar.png',
          name: 'Bejo'
        },
        content: 'Test Test '
      }
    ];

  }
}
