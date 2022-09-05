import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { contactForm } from 'src/app/@core/models/mail.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  model: contactForm = new contactForm();

  constructor() { }

  ngOnInit(): void {
  }

  sendMail(form: NgForm){
    if (!form.valid) {
      return;
    }
    console.log(this.model)
  }

}
