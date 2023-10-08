import { Component, OnInit } from '@angular/core';
import { FooterProps } from 'src/app/shared/components/models';

@Component({
  selector: 'app-list-training',
  templateUrl: './list-training.page.html',
  styleUrls: ['./list-training.page.scss'],
})
export class ListTrainingPage implements OnInit {
  public footerProps: FooterProps = {
    currentUrl: '/training/list-training',
  };
  constructor() {}

  ngOnInit() {}
}
