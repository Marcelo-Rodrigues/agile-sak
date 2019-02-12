import { TaskComponent } from './planning/task/task.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './planning/history/history.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'planning',
    redirectTo: 'planning/histories'
  },
  {
    path: 'planning/histories',
    component: HistoryComponent
  },
  {
    path: 'planning/histories/:historyId',
    redirectTo: 'planning/histories/:historyId/tasks'
  },
  {
    path: 'planning/histories/:historyId/tasks',
    component: TaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
