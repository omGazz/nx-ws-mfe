import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, RouterLink],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'shell';

  router = inject(Router);

  ngOnInit() {
    this.router.navigate([
      { outlets: { header: ['mfe1'], sidebar: ['mfe2'], footer: ['mfe3'] } },
    ]);
  }
}
