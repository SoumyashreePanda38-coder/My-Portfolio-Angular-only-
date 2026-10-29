import { Component, OnInit } from '@angular/core';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: ContactForm = {
    name: '',
    email: '',
    message: ''
  };

  constructor() {}

  ngOnInit(): void {}

  sendMessage(event: Event): void {

    event.preventDefault();

    const name = this.contactForm.name.trim();
    const email = this.contactForm.email.trim();
    const message = this.contactForm.message.trim();

    if (!name || !email || !message) {
      return;
    }

    const subject = encodeURIComponent(
      `Portfolio Enquiry from ${name}`
    );

    const body = encodeURIComponent(
      `Hello Soumyashree,\n\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n\n` +
      `Message:\n${message}\n\n` +
      `Sent from soumyashree.dev`
    );

    window.location.href =
      `mailto:soumyashreepandacse2006@gmail.com?subject=${subject}&body=${body}`;
  }

}