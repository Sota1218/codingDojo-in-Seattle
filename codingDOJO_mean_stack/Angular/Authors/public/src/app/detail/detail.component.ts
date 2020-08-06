import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { AppComponent } from "../app.component";
@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"]
})
export class DetailComponent implements OnInit {
  onePet: any;
  detail: any;
  routeId: any;
  app: AppComponent;
  errorMessage: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    this.errorMessage = null;
    this.onePet = {};
    this.detail = { name: "" };
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
      this.detail = data.results;
    });
  }

  goHome(): void {
    this._router.navigate(["/"]);
  }

  addLike(): void {
    this.onePet.like += 1;

    let obs = this._httpService.updatePet(this.onePet, this.routeId);
    obs.subscribe((data: any) => {
      if (data.message == "success") {
        this.errorMessage = data.message;
      } else {
        this.errorMessage = "Name must be more than 3 characters";
      }
    });
    // this.app.getAllPets();
  }
  delete(): void {
    let obs = this._httpService.deletePet(this.routeId);
    obs.subscribe(data => {
      this.goHome();
    });
    // this.getAllPets();
  }
  // addLike(){
  //   let obs = this._httpService.(this.routeId);
  //   obs.subscribe((data: any) => {
  //     console.log(data);
  //     this.onePet = data.results;
  //     this.detail = data.results;
  //   });
  // }
}
