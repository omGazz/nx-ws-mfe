import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    CommonModule, RouterLink
  ],
  template: `<p>detail works!</p>
    <a routerLink="/users/detail">Internal Detail</a>
    <a routerLink="/users/list">Internal List</a>
    <a routerLink="/users/users">users/users</a>
    <a routerLink="/users">/users</a>

  `,
  styleUrl: './detail.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailComponent { }
