import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Signal,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooService } from '@nx-sw/foo-library';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="page">
      <div class="btn-container">
        <a routerLink="/detail">DETAIL</a>
        <a routerLink="/list">LIST</a>
        <a routerLink="/landing">landing</a>
      </div>
      <h1>Welcome in the landing page of this routable micro frontend!</h1>
      <p>
        Click on changeData button to use a shared service across multiple
        micro-frontend apps
      </p>
      <div class="btn-container">
        <button class="change-button" (click)="changeData()">
          Change Shared Data
        </button>
        <button class="stamp-button" (click)="stamp()">stamp in console</button>
      </div>
      <p>Current shared data:</p>
      <div class="btn-container">
        <h3 class="shared-data">{{ mySharedData() }}</h3>
      </div>
    </div>
  `,
  styleUrl: './landing.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent {
  fooService: FooService = inject(FooService);
  mySharedData: Signal<string> = this.fooService.fooDataSignal;

  changeData() {
    const name = this.generateRandomNameFromSiliconValley();
    this.fooService.setData(name);
  }

  stamp() {
    console.log('>>>>>> from app:users', this.fooService.fooDataSignal());
  }

  protected generateRandomNameFromSiliconValley(): string {
    const array = [
      'Hello World!',
      'Pied Piper',
      'Richard Hendricks',
      'Erlich Bachman',
      'Nelson "Big Head" Bighetti ',
      'Jared Dunn',
      'Dinesh Chugtai',
      'Bertram Gilfoyle',
      'Monica Hall',
      'Laurie Bream',
      'Gavin Belson',
      'Russ Hanneman',
      'Jian Yang',
      'Carla Walton',
      'Jack Barker',
      'Gavin Belson',
      'Peter Gregory',
      'Donald "Jared" Dunn',
    ];
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }
}
