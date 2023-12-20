import { Component } from '@angular/core';

@Component({
  selector: 'app-image-banner',
  standalone: true,
  imports: [],
  template: `
    <div></div>
    <img src="/assets/images/ball.jpg" />
  `,
  styles: `
    div {
      height: var(--size-15);
      background: linear-gradient(transparent, #000000); 
    }
  `,
})
export class ImageBannerComponent {}
