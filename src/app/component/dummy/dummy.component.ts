import {Component, input, output} from "@angular/core";

@Component({
  selector: "crm-dummy",
  templateUrl: "./dummy.component.html",
  styleUrls: ["./dummy.component.scss"],
})
export class DummyComponent {
  public label = input.required<string>();

  public clicked = output<string>();

  constructor() {}

  onClicked(): void {
    this.clicked.emit(this.label() + "a random string");
  }
}
