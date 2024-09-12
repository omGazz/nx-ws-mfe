import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `<p>list works!</p>
    <a routerLink="/users/detail">Internal Detail</a>
    <a routerLink="/users/list">Internal List</a>
    <a routerLink="/users/users">users/users</a>
    <a routerLink="/users">/USERS</a> `,
  styleUrl: './list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {}
