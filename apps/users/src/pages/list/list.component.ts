import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="page">
      <div class="btn-container">
        <a routerLink="/detail">DETAIL</a>
        <a routerLink="/list">LIST</a>
        <a routerLink="/landing">landing</a>
      </div>
      <ul>
        <li>Eric</li>
        <li>John</li>
        <li>Paul</li>
        <li>Ringo</li>
        <li>Richard</li>
        <li>George</li>
      </ul>
    </div>
  `,
  styleUrl: './list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {}
