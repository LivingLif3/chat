import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'chat';

  dialogs: any = [
    {
      id: 'r7tq8fgsah',
    },
    {
      id: 'sdyuiodsad',
    },
    {
      id: 'fasf2r1ffa',
    },
    {
      id: 'dsadasdasd',
    },
    {
      id: 'r7tq8dsa12',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
