import { Component, OnInit } from '@angular/core';

import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.page.html',
  styleUrls: ['./list-user.page.scss'],
})
export class ListUserPage implements OnInit {
  public currentOrientation: string;
  public orientationChange: string;
  constructor(private screenOrientation: ScreenOrientation) {
    this.currentOrientation = this.screenOrientation.type;
    this.screenOrientation.onChange().subscribe(() => {
      this.orientationChange = 'orientation change';
    });
  }

  ngOnInit() {}

  public setLandscapeOrientation() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }

  public setPortraitOrientation() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }

  public unlockOrientation() {
    this.screenOrientation.unlock();
  }

  public getCurrentOrientation() {
    this.currentOrientation = this.screenOrientation.type;
  }
}
