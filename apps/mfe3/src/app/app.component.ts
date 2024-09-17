import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooService } from '@nx-sw/foo-library';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'mfe3';
  fooService = inject(FooService);
  data = this.fooService.fooDataSignal;
}
