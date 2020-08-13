import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed/feed.component';
import { ComponentRoutingModule } from './component-routing.module';

@NgModule({
  declarations: [FeedComponent],
  imports: [CommonModule, ComponentRoutingModule],
})
export class ComponentModule {}
