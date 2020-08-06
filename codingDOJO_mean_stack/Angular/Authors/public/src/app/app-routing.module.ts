import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NewComponent } from "./new/new.component";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { EditComponent } from "./edit/edit.component";
import { DetailComponent } from "./detail/detail.component";

const routes: Routes = [
  { path: "edit/:id", component: EditComponent },
  { path: "new", component: NewComponent },
  { path: "", component: HomeComponent },
  { path: ":id", component: DetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
