import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pets/list/list.component';
import { AddComponent } from './pets/add/add.component';
import { ViewComponent } from './pets/view/view.component';

const routes: Routes = [
  { path: 'pets', component: ListComponent },
  { path: 'pets/add', component: AddComponent },
  { path: 'pets/:id', component: ViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
