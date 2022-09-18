import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projectLink1: boolean = false;
  projectLink2: boolean = false;
  projectLink3: boolean = false;
  projectLink4: boolean = false;
  projectLink5: boolean = false;
  projectLink6: boolean = false;
  projectLink7: boolean = false;
  projectLink8: boolean = false;
  projectLink9: boolean = false;
  projectLink10: boolean = false;

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
  showLink5(){
    this.projectLink5 = !this.projectLink5;
    console.log(this.projectLink5)
  }
  showLink6(){
    this.projectLink6 = !this.projectLink6;
    console.log(this.projectLink6)
  }
  showLink7(){
    this.projectLink7 = !this.projectLink7;
    console.log(this.projectLink7)
  }
  showLink8(){
    this.projectLink8 = !this.projectLink8;
    console.log(this.projectLink8)
  }
  showLink9(){
    this.projectLink9 = !this.projectLink9;
    console.log(this.projectLink9)
  }
  showLink10(){
    this.projectLink10 = !this.projectLink10;
    console.log(this.projectLink10)
  }

}
