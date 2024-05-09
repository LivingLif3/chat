import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DialogComponent } from './components/dialog/dialog.component';
import { MessageComponent } from './components/message/message.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: ':id',
    component: DialogComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
  declarations: [MessageComponent, DialogComponent],
})
export class DialogModule {}
