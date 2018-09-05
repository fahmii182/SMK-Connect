import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { AbsensiPage } from './absensi';

@NgModule({
  declarations: [
    AbsensiPage,
  ],
  imports: [
    IonicPageModule.forChild(AbsensiPage),
    TranslateModule.forChild()
  ],
  exports: [
    AbsensiPage
  ]
})
export class AbsensiPageModule { }
