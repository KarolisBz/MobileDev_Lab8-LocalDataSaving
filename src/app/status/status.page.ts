import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonCardHeader, IonRadio, IonLabel, IonItem, IonRadioGroup, IonButton, IonBackButton, IonButtons } from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
  standalone: true,
  imports: [IonButtons, IonBackButton, IonButton, IonRadioGroup, IonLabel, IonRadio, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCardHeader, IonItem]
})
export class StatusPage implements OnInit {
  myStatus:string = "";

  constructor(private storage:Storage, private router:Router) {}

  ngOnInit(): void {
    
  }

  async ionViewWillEnter() {
    await this.storage.create();
    this.myStatus = await this.storage.get('status');
  }

  async saveStatus() {
    await this.storage.set('status', this.myStatus)
    .then(
      () =>
        {
          this.router.navigate(["/home"]);
        }
    )
    .catch(
      (error) =>
        {
          console.log(error);
        }
      
    );
  }
}
