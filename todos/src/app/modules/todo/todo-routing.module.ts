import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageComponent } from './pages/manage/manage.component';
import { authGuard } from '../../core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'todos',
    component: ManageComponent,
    canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
