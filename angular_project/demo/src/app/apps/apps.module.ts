import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppsRoutingModule } from './apps-routing.module';
import { QuillModule } from 'ngx-quill';

import { ThemeConstantService } from '../shared/services/theme-constant.service';
import { AppsService } from '../shared/services/apps.service';
import { TableService } from '../shared/services/table.service';

import { ChatComponent } from './chat/chat.component';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { MailComponent } from './mail/mail.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';
import { OrdersListComponent } from './e-commerce/orders-list/orders-list.component';
import { ProductsListComponent } from './e-commerce/products-list/products-list.component';
import { ProductEditComponent } from './e-commerce/product-edit/product-edit.component';
import { ProductComponent } from './e-commerce/product/product.component';

@NgModule({
    imports: [
        SharedModule,
        ReactiveFormsModule,
        AppsRoutingModule,
        QuillModule
    ],
    declarations: [
        ChatComponent,
        FileManagerComponent,
        MailComponent,
        ProjectListComponent,
        ProjectDetailsComponent,
        OrdersListComponent,
        ProductsListComponent,
        ProductEditComponent,
        ProductComponent
    ],
    providers: [
        ThemeConstantService,
        AppsService,
        TableService
    ]
})

export class AppsModule {}