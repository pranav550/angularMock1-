import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-async-call-child',
  templateUrl: './async-call-child.component.html',
  styleUrls: ['./async-call-child.component.css']
})
export class AsyncCallChildComponent implements OnInit {
  @Input() users$:any
  constructor() { }

  ngOnInit(): void {
  }

}
