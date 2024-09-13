import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `<p>list works!</p>
    <ul>
      <li>Eric</li>
      <li>John</li>
      <li>Paul</li>
      <li>Ringo</li>
      <li>Richard</li>
      <li>George</li>
      
    </ul>    
    `,
  styleUrl: './list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {}

/**
 * C'è del casino col routing. nella mia idea iniziale e penso sia quella più sensata 
 * in modo da poter lanciare l'app in locale e gestire internamente le route, non 
 * voglio esporre i componenti con le route nella shell, ma voglio esporre il 
 * componente mfe con il router outlet e caricare quello nel router outlet della shell. 
 * Però magari non è l'approccio migliore da utilizzare.
 */
