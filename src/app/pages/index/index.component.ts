import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import 'aos/dist/aos.css';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  projectLink1: boolean = false;
  projectLink2: boolean = false;
  projectLink3: boolean = false;
  projectLink4: boolean = false;

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

  showLink1(){
    this.projectLink1 = !this.projectLink1;
    console.log(this.projectLink1)
  }
  showLink2(){
    this.projectLink2 = !this.projectLink2;
    console.log(this.projectLink2)
  }
  showLink3(){
    this.projectLink3 = !this.projectLink3;
    console.log(this.projectLink3)
  }
  showLink4(){
    this.projectLink4 = !this.projectLink4;
    console.log(this.projectLink4)
  }

}
