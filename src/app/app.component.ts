import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, group } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Fresh Prints';
  toggle: boolean;
  domToggle: boolean;

  ngOnInit() {
    this.toggle = true;
    this.domToggle = true;
  }

  toggleForms = () => {
    this.toggle = !this.toggle;
    setTimeout(() => {
      this.domToggle = this.toggle;
    }, 200);
  }
}
