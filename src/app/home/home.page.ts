import { Component, OnInit } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButton, IonHeader, IonToolbar, IonTitle, IonContent, RouterLinkWithHref],
})
export class HomePage {
  myHomeStatus:string = "";

  constructor(private storage:Storage) {}
  async ionViewWillEnter()
  {
    await this.storage.create();
    this.myHomeStatus =  await this.storage.get('status');
  }
}
