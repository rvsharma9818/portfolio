import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitted = false;
  isSuccess = false;
  isLoading = false;
  errorMessage = '';

  // Get EmailJS credentials from environment
  private readonly emailjsServiceId = environment.emailjs.serviceId;
  private readonly emailjsTemplateId = environment.emailjs.templateId;
  private readonly emailjsPublicKey = environment.emailjs.publicKey;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {
    // Initialize EmailJS with your public key
    emailjs.init(this.emailjsPublicKey);
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.isSubmitted = true;
    this.errorMessage = '';

    if (this.contactForm.invalid) {
      return;
    }

    this.isLoading = true;

    // Prepare template parameters for EmailJS
    const templateParams = {
      from_name: this.contactForm.value.name,
      from_email: this.contactForm.value.email,
      subject: this.contactForm.value.subject,
      message: this.contactForm.value.message
    };

    // Send email using EmailJS
    emailjs.send(
      this.emailjsServiceId,
      this.emailjsTemplateId,
      templateParams
    )
    .then((response) => {
      console.log('Email sent successfully:', response);
      this.isSuccess = true;
      this.contactForm.reset();
      this.isSubmitted = false;
      this.isLoading = false;

      // Reset success message after 5 seconds
      setTimeout(() => {
        this.isSuccess = false;
      }, 5000);
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      this.errorMessage = 'Failed to send message. Please try again later.';
      this.isLoading = false;
    });
  }
}
