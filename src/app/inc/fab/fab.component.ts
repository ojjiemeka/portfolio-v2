import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.css']
})
export class FabComponent implements OnInit {

  fab: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showAction(){
    this.fab = !this.fab;
    console.log(this.fab)
  }

}
