import { state } from '@angular/animations';
import { ApiService } from './../../../../core/services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  loading: boolean = false;

  messages: any = [
    {
      dialogId: 1,
      messageId: 2,
      message: 'dsada',
      state: false,
    },
    {
      dialogId: 1,
      messageId: 3,
      message: 'dsada',
      state: true,
    },
    {
      dialogId: 1,
      messageId: 2,
      message: 'dsada',
      state: false,
    },
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.activatedRoute.params.subscribe((params) => {
      this.messages = this.api.getDialogMessages(params['id']);
      this.loading = false;
    });
  }
}
