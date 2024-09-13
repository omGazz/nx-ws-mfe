import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

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
  </div>
  `,
  styleUrl: './landing.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent {}
