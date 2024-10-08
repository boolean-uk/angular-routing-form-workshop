import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AddComponent, ViewComponent, ListComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [AddComponent, ViewComponent, ListComponent],
})
export class PetsModule {}
