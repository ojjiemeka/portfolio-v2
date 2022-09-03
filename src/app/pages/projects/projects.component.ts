import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
