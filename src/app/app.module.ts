import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskExecutorComponent } from './task-executor/task-executor.component';
import { TaskDescriptionComponent } from './task-description/task-description.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskExecutorComponent,
    TaskDescriptionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
