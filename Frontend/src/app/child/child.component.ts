import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit, OnDestroy {


  constructor() {

  }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    
  }
}
