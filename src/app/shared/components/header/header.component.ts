import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title?: string;
  @Input() hasBackButton: boolean = false;
  @Input() backButtonTitle?: string;
  @Input() backButtonColor?: string;
  @Input() backButtonUrl?: string;

  constructor() {}

  ngOnInit() {}
}
