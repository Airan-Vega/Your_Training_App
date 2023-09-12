import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { App } from '@capacitor/app';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private platform: Platform) {}
  async ngOnInit(): Promise<void> {
    this.closeApp();
  }

  private closeApp() {
    this.platform.backButton.subscribeWithPriority(0, () => {
      App.exitApp();
    });
  }
}
