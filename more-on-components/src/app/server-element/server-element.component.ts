import { ContentChild, ElementRef, OnChanges } from '@angular/core';
import { DoCheck } from '@angular/core';
import { AfterContentChecked } from '@angular/core';
import { ViewChild } from '@angular/core';
import { AfterContentInit } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { OnInit } from '@angular/core';
import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation: ViewEncapsulation.ShadowDom,
})
export class ServerElementComponent
  implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked
{
  // @Input('srvElement') element: { type: string; name: string; content: string };
  @Input() name: string;
  @ViewChild('heading', { static: true }) header: ElementRef;
  @ContentChild('ContentParagraph', { static: true })
  contentParagraph: ElementRef;

  constructor() {
    console.log('1.constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('2.ngOnChanges called');
    console.log('2.1', changes);
  }

  ngOnInit() {
    console.log('3, ngOnInit called');
  }

  ngDoCheck(): void {
    console.log('4, ngDoCheck runs');
  }

  ngAfterContentInit(): void {
    console.log('5. ngAfterContent init is called');
  }

  ngAfterContentChecked(): void {
    console.log('6. ngAfterContent chcecked is called');
  }
}
