import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpService } from "./http.service";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {}
