import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LibraryModule } from '../library/library.module';
import { SharedModule } from '../shared/shared.module';
import { TemplatesModule } from '../templates/templates.module';
import { TextModule } from '../text/text.module';
import { OrdersRoutingModule } from './orders-routing.module';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';



@NgModule({
  declarations: [PageListOrdersComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    TemplatesModule,
    TextModule,
    LibraryModule,
    SharedModule
  ]
})
export class OrdersModule { }
