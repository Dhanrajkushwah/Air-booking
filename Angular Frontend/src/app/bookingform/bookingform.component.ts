import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from '../userservice.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookingform',
  templateUrl: './bookingform.component.html',
  styleUrls: ['./bookingform.component.css']
})
export class BookingformComponent {
  travelForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder,private travelService: UserserviceService,private router : Router) {
    this.travelForm = this.fb.group({
      title: ['', Validators.required],
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      birthDate: ['', Validators.required],
      organizationName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      departureCountry: ['', Validators.required],
      destinationCountry: ['', Validators.required],
      departureDateTime: this.fb.group({
        date: ['', Validators.required],
        time: ['', Validators.required]
      }),
      returnDateTime: this.fb.group({
        date: ['', Validators.required],
        time: ['', Validators.required]
      }),
      classOfService: ['', Validators.required],
      preferredHotel: [''],
      preferredAirline: [''],
      additionalInfo: ['']
    });
  }

  // Submit form handler
  onSubmit() {
    this.submitted = true;

    if (this.travelForm.invalid) {
      console.log("Form is invalid");
      return;
    }
    // Process the form
    const formData = this.travelForm.value;
    this.travelService.addTravelInfo(formData).subscribe(
      response => {
        console.log('Travel added successfully', response);
        this.router.navigate(["/list"]);
        this.travelForm.reset();
        this.submitted = false; 
    
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Your travel information has been added successfully!',
          confirmButtonText: 'Okay'
        });
      },
      error => {
        console.error('Error adding travel:', error);

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong! Please try again later.',
          confirmButtonText: 'Okay'
        });
      }
    );

  }

  get f() {
    return this.travelForm.controls;
  }
}