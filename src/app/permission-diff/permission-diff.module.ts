import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermissionDiffRoutingModule } from './permission-diff-routing.module';
import { PermissionDiffComponent } from './permission-diff.component';


@NgModule({
  declarations: [PermissionDiffComponent],
  imports: [
    CommonModule,
    PermissionDiffRoutingModule
  ]
})
export class PermissionDiffModule { }
