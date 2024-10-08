import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pets/list/list.component';
import { AddComponent } from './pets/add/add.component';
import { ViewComponent } from './pets/view/view.component';
import { EditComponent } from './pets/edit/edit.component';

const routes: Routes = [
  { path: 'pets', component: ListComponent },
  { path: 'pets/add', component: AddComponent },
  { path: 'pets/:id', component: ViewComponent },
  { path: 'pets/edit/:id', component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
