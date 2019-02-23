import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, AfterViewInit {
  @Input() element: { type: string, name: string, content: string };
  @ViewChild('heading') heading: ElementRef;
  constructor() {
  }

  ngOnInit() {
    console.log(`Local reference heading ngOnInit: ${this.heading.nativeElement.textContent}`);
  }

  ngAfterViewInit() {
    console.log(`Local reference heading ngAfterViewInit: ${this.heading.nativeElement.textContent}`);
  }

}
