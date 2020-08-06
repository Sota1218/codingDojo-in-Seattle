import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { HttpClientModule } from "@angular/common/http";
import { HttpService } from "./http.service";
import { TaskComponent } from './task/task.component';
@NgModule({
  declarations: [AppComponent, HomeComponent, TaskComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {}
