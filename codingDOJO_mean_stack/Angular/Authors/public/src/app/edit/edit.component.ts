import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { AppComponent } from "../app.component";
@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {
  onePet: any;
  editedPet: any;
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
    this.errorMessage = null;
    this.errorMessage1 = null;
    this.errorMessage2 = null;
    this.errorMessage3 = null;
    this.errorMessage = null;
    this.onePet = { name: "" };
    this.editedPet = { name: "", type: "", description: "" };
    this._route.params.subscribe((params: Params) => {
      console.log(params["id"]);
      this.routeId = params["id"];
      this.getOnePet();
    });
  }
  getOnePet(): void {
    let obs = this._httpService.getOnePet(this.routeId);
    obs.subscribe((data: any) => {
      console.log(data);
      this.onePet = data.results;
      this.editedPet = data.results;
    });
  }
  editPet(pet: string): void {
    this.errorMessage = null;
    this.errorMessage1 = null;
    this.errorMessage2 = null;
    this.errorMessage3 = null;
    console.log(pet);
    this.editedPet = pet;
    console.log(this.editedPet.name);
    if (this.editedPet.name.length < 3) {
      this.errorMessage1 = "Name must be at least 3 characters long.";
    }
    if (this.editedPet.type.length < 3) {
      this.errorMessage2 = "Type must be at least 3 characters long.";
    }
    if (this.editedPet.description.length < 3) {
      this.errorMessage3 = "Description must be at least 3 characters long.";
    } else {
      let obs = this._httpService.updatePet(pet, this.routeId);
      obs.subscribe((data: any) => {
        if (data.message == "success") {
          this.editedPet = data.results;
          this.errorMessage = data.message;
          this.goHome();
        } else {
          this.errorMessage = "Error!This name is already used.";
        }
      });
    }

    // this.app.getAllPets();
  }

  cancel(): void {
    this.editedPet = { name: "" };
  }

  goHome(): void {
    this._router.navigate(["/", this.routeId]);
  }
}
