import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PermissionDiffComponent} from './permission-diff.component';

const routes: Routes = [
  {path: 'permission-diff', component: PermissionDiffComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermissionDiffRoutingModule {
}
