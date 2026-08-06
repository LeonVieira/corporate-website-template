import { Component } from '@angular/core';
import { TestimonialService } from '../../services/testimonial.service';
import { Testimonial } from '../../models/testimonial.model';

@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css',
})
export class Testimonials {

  testimonials: Testimonial[] = [];

  currentIndex = 0;

  constructor(private testimonialService: TestimonialService) {
    this.testimonials = this.testimonialService.getTestimonials();
  }

  next(): void {
    this.currentIndex =
      (this.currentIndex + 1) % this.testimonials.length;
  }

  previous(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.testimonials.length) %
      this.testimonials.length;
  }

}