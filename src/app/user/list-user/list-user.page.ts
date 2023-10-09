import { Component, OnInit } from '@angular/core';

import { FooterProps } from 'src/app/shared/components/models';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.page.html',
  styleUrls: ['./list-user.page.scss'],
})
export class ListUserPage implements OnInit {
  public footerProps: FooterProps = {
    currentUrl: '/user/list-user',
  };

  constructor() {}

  ngOnInit() {}
}
