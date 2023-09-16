import { Component, Input, OnInit } from '@angular/core';
import { Exercise } from '../../models';

@Component({
  selector: 'app-card-with-image',
  templateUrl: './card-with-image.component.html',
  styleUrls: ['./card-with-image.component.scss'],
})
export class CardWithImageComponent implements OnInit {
  @Input() exercise: Exercise;

  constructor() {}

  ngOnInit() {}
}
