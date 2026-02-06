import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [NgIf],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience {
  @Input() title: string = '';
  @Input() institution: string = '';
  @Input() fromYear: string = '';
  @Input() toYear: string = '';
  @Input() description: string = '';
  @Input() imageSrc: string = '';
}