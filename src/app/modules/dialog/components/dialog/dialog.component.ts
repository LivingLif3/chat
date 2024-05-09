import { state } from '@angular/animations';
import { ApiService } from './../../../../core/services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Subject, concatMap } from 'rxjs';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  chosenMessage: any = null;

  message: FormControl = new FormControl('');
  updationControl: FormControl = new FormControl('');

  loading: boolean = false;

  messages$: Subject<any> = new Subject<any>();

  messages: any = [
    // {
    //   dialogId: 1,
    //   messageId: 2,
    //   message: 'dsada',
    //   state: false,
    // },
    // {
    //   dialogId: 1,
    //   messageId: 3,
    //   message: 'dsada',
    //   state: true,
    // },
    // {
    //   dialogId: 1,
    //   messageId: 2,
    //   message: 'dsada',
    //   state: false,
    // },
  ];

  currentDialogId!: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.activatedRoute.params
      .pipe(
        concatMap((params: any) => {
          this.currentDialogId = params['id'];
          return this.api.getDialogMessages(params['id']);
        })
      )
      .subscribe((messages: any) => {
        this.messages$.next(messages);
        this.messages = messages;
        this.loading = false;
      });
  }

  sendMessage() {
    this.loading = true;
    this.api
      .sendMessage(this.currentDialogId, this.message.value, true)
      .pipe(
        concatMap((res: any) => {
          return this.api.getDialogMessages(this.currentDialogId);
        })
      )
      .subscribe((messages: any) => {
        this.messages$.next(messages);
        this.messages = messages;
        this.loading = false;
      });
  }

  clearDialog() {
    this.loading = true;
    this.api
      .deleteMessages(this.currentDialogId)
      .pipe(
        concatMap((res: any) => {
          return this.api.getDialogMessages(this.currentDialogId);
        })
      )
      .subscribe((messages: any) => {
        this.messages$.next(messages);
        this.messages = messages;
        this.loading = false;
      });
  }

  update() {
    this.api
      .updateMessages(
        this.currentDialogId,
        this.chosenMessage,
        this.updationControl.value
      )
      .pipe(
        concatMap((res: any) => {
          return this.api.getDialogMessages(this.currentDialogId);
        })
      )
      .subscribe((messages: any) => {
        this.messages$.next(messages);
        this.messages = messages;
        this.loading = false;
      });
  }

  log(value: any) {
    console.log(value);
  }
}
