import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { NewComponent } from "./new/new.component";
import { EditComponent } from "./edit/edit.component";
import { HttpClientModule } from "@angular/common/http";
import { HttpService } from "./http.service";
import { FormsModule } from "@angular/forms";
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NewComponent, EditComponent, DetailComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {}
