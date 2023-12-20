import { Component, Inject } from '@angular/core';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Pokemon } from '../../../types';
import { JsonPipe } from '@angular/common';
import { ButtonComponent } from '../../../components/ui/button.component';

@Component({
  selector: 'app-info-dialog',
  standalone: true,
  imports: [JsonPipe, ButtonComponent],
  template: `
    <h1>{{ data.pokemon.name }}</h1>
    <app-button (click)="close()">Close</app-button>
    <div>
      <pre>{{ data.pokemon | json }}</pre>
    </div>
  `,
  styles: `
  :host {
    position: relative;
    display: block;
    background: #fff;
    border-radius: 8px;
    padding-block: var(--size-4);
    padding-inline: var(--size-6);
    max-height: 90vh;
    overflow: auto;
    color: var(--text-1-light);
  }
  h1 {
    text-transform: uppercase;
  }
  app-button {
    position: absolute;
    right: var(--size-fluid-1);
    top: var(--size-fluid-1);
  }
  `,
})
export class InfoDialogComponent {
  constructor(
    @Inject(DIALOG_DATA) public data: { pokemon: Pokemon },
    public dialogRef: DialogRef<string>
  ) {}

  close() {
    this.dialogRef.close();
  }
}
