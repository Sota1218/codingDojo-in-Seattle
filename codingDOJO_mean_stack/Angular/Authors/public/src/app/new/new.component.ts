import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { AppComponent } from "../app.component";
@Component({
  selector: "app-edit",
  templateUrl: "./new.component.html",
  styleUrls: ["./new.component.css"]
})
export class NewComponent implements OnInit {
  onePet: any;
  addedPet: any;
  routeId: any;
  app: AppComponent;
  errorMessage: any;
  errorMessage1: any;
  errorMessage2: any;
  errorMessage3: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    this.onePet = { name: "" };
    this.addedPet = { name: "", type: "", description: "" };
    this.errorMessage = null;
    this.errorMessage1 = null;
    this.errorMessage2 = null;
    this.errorMessage3 = null;
  }
  createPet(pet: string): void {
    this.errorMessage = null;
    this.errorMessage1 = null;
    this.errorMessage2 = null;
    this.errorMessage3 = null;
    console.log(pet);
    this.addedPet = pet;
    console.log(this.addedPet.name);
    if (this.addedPet.name.length < 3) {
      this.errorMessage1 = "Name must be at least 3 characters long.";
    }
    if (this.addedPet.type.length < 3) {
      this.errorMessage2 = "Type must be at least 3 characters long.";
    }
    if (this.addedPet.description.length < 3) {
      this.errorMessage3 = "Description must be at least 3 characters long.";
    } else {
      let obs = this._httpService.addPet(pet);






      


























      obs.subscribe((data: any) => {
        if (data.message == "success") {
          this.addedPet = data.results;
          this.errorMessage = data.message;
          this.goHome();
        } else {
          this.errorMessage = "Error!This name is already used.  ";
        }
      });
    }
  }
  goHome(): void {
    this._router.navigate(["/"]);
  }
}
