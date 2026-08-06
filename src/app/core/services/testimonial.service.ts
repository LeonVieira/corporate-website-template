import { Injectable } from '@angular/core';
import { Testimonial } from '../models/testimonial.model';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {

    getTestimonials(): Testimonial[] {

        return [

        {
            id:1,
            name:"Sarah Johnson",
            position:"Operations Manager",
            company:"Acme Manufacturing",
            image:"https://randomuser.me/api/portraits/women/44.jpg",
            rating:5,
            comment:"Interface Systems transformed our workflow and delivered exactly what our business needed."
        },

        {
            id:2,
            name:"Michael Brown",
            position:"IT Director",
            company:"BlueWave Technologies",
            image:"https://randomuser.me/api/portraits/men/32.jpg",
            rating:5,
            comment:"Professional, knowledgeable, and easy to work with from start to finish."
        },

        {
            id:3,
            name:"Emily Davis",
            position:"Finance Manager",
            company:"Global Logistics",
            image:"https://randomuser.me/api/portraits/women/68.jpg",
            rating:5,
            comment:"The custom software has saved us hours of manual work every week."
        }

        ];

    }

}