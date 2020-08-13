import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/i18n';
import { Shell } from '@app/shell/shell.service';
import { FeedComponent } from './feed/feed.component';

const routes: Routes = [Shell.childRoutes([{ path: '', component: FeedComponent, data: { title: extract('Home') } }])];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class ComponentRoutingModule {}
