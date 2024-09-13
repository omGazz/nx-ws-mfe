import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="page">
      <div class="btn-container">
        <a routerLink="/detail">DETAIL</a>
        <a routerLink="/list">LIST</a>
        <a routerLink="/landing">landing</a>
      </div>
      <div class="lorem-text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel
          felis malesuada, iaculis nunc non, malesuada velit. Maecenas convallis
          felis nec risus cursus, a finibus justo luctus. Phasellus auctor,
          ipsum non ultricies faucibus, sapien eros vestibulum erat, nec
          efficitur lacus nunc et magna. Integer at eros lobortis, fermentum
          felis a, sodales lorem. Donec ac tellus sed mi tempor sodales. Cras
          nec turpis vel ligula gravida dictum. Fusce eu justo nec justo egestas
          convallis. Aliquam erat volutpat. Duis consectetur, odio nec fermentum
          egestas, nisi nulla malesuada dolor, ac vulputate libero nunc id enim.
          Nulla facilisi. Sed ut velit enim. Suspendisse potenti. Sed imperdiet,
          orci non fermentum feugiat, nisl felis tempor felis, nec convallis
          risus leo non dui. Nam eget mi non metus tincidunt convallis.
        </p>
      </div>
    </div>
  `,
  styleUrl: './detail.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailComponent {}
