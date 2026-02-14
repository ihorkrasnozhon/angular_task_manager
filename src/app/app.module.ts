import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {HeaderComponent} from "./header/header.components";
import {UserComponent} from "./user/user.component";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "./shared/shared.module";
import {TasksModule} from "./task-list/tasks.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent
  ],
  bootstrap: [AppComponent],
  imports: [BrowserModule, FormsModule, SharedModule, TasksModule]
})
export class AppModule {}
