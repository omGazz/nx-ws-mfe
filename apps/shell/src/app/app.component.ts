import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule, RouterLink],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'shell';

  router = inject(Router);
  ngOnInit() {
    console.log('shell app initialized');
    //this.router.navigate(['/users']);
    //this.router.navigate([{ outlets: { content: ['users'] } }]);
  }
}
