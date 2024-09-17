import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [CommonModule],
  template: `<div>
    <h1>Error loading remote module</h1>
    <p>This is a custom component for handling errors</p>
  </div>`,
  styles: `
  div{
    background-color: #FFFFFF;
  }`,
})
export class ErrorComponent {}
