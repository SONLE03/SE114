import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'
import { NativeScriptFormsModule } from "@nativescript/angular";
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NativeScriptDateTimePickerModule } from "@nativescript/datetimepicker/angular";
import { HomeComponent } from './home/home.component';
import { TaskListComponent } from './task-list/task-list.component'
import { AddTaskComponent } from './add-task/add-task.component'
import { AboutUsComponent } from './about-us/about-us.component'
import { PhotoViewerComponent } from './photo-viewer/photo-viewer.component'
import { TaskService } from './service/task.service'
import { TopBarComponent } from './top-bar/top-bar.component'
import { DatePipe } from '@angular/common'
import { TaskDetailComponent } from './task-detail/task-detail.component'
import { EditTaskComponent } from './edit-task/edit-task.component'
import { SearchTaskComponent } from './search-task/search-task.component'
import { DropDownModule } from "nativescript-drop-down/angular";
import { DataBaseService } from './service/database.service'

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule,
    AppRoutingModule, 
    NativeScriptFormsModule, 
    NativeScriptDateTimePickerModule,
    DropDownModule,
    
    ],
  declarations: 
  [ AppComponent, 
    HomeComponent, 
    TaskListComponent, 
    AddTaskComponent,
    AboutUsComponent,
    PhotoViewerComponent,
    TopBarComponent,
    TaskDetailComponent,
    EditTaskComponent,
    SearchTaskComponent
  ],
  providers: [TaskService, DatePipe, DataBaseService,],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}

