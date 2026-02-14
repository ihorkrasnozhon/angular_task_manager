import {NgModule} from "@angular/core";
import {TaskListComponent} from "./task-list.component";
import {TaskComponent} from "./task/task.component";
import {NewTaskComponent} from "./new-task/new-task.component";
import {SharedModule} from "../shared/shared.module";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    TaskListComponent,
    TaskComponent,
    NewTaskComponent
  ],
  exports: [TaskListComponent],
  imports: [SharedModule, CommonModule, FormsModule]
})
export class TasksModule {}
