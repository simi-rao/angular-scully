import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogRootComponent } from './blog-root.component';

const routes: Routes = [{ path: '', component: BlogRootComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRootRoutingModule { }
