import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'album-box',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './albumboxcomponent.html',
})
export class AlbumBoxComponent {
  @Input() pictures: string[] = [];
}