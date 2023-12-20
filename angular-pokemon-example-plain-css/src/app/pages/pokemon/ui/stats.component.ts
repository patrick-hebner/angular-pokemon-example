import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [],
  template: `
    <ul>
      @for (stat of stats; track $index) {
      <li>
        <span class="value">{{ stat.base_stat }}</span>
        <span class="name">{{ stat.stat.name }}</span>
      </li>
      }
    </ul>
  `,
  styles: `
    ul {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--size-fluid-2);
      margin-top: var(--size-fluid-2);
    }

    li {
      display: grid;
      gap: 0;
      place-content: center;


      & .value {
        text-align: center;
        color: var(--text-1);
        font-weight: var(--font-weight-9)
      }

      & .name {
        text-align: center;
        color: var(--text-3);
        font-size: var(--font-size-0);
        text-transform: capitalize;
      }
    }
  `,
})
export class StatsComponent {
  @Input() stats!: { base_stat: number; stat: { name: string } }[];
}
