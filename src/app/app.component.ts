import { Component, ElementRef, QueryList, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { ToggleComponent } from './toggle.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChildren(ToggleComponent) toggleComps: QueryList<ToggleComponent>;
  @ViewChild('nameInput', {static: true}) nameInput: ElementRef<HTMLInputElement>;
  name = 'Angular';
  showLast = true;
  isChecked = true;
  ngOnInit() {
    console.log(this.nameInput);
  }
  ngAfterViewInit() {
    
    this.toggleComps.changes.subscribe(console.log);
  }
}
