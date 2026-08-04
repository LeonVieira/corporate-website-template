import { Component, inject, Input } from '@angular/core';
import { Dashboard } from '../../core/components/dashboard/dashboard';
import { Solutions } from '../../core/components/solutions/solutions';
import { Testimonials } from '../../core/components/testimonials/testimonials';

@Component({
  selector: 'app-landingpage',
  imports: [Dashboard,Testimonials,Solutions],
  templateUrl: './landingpage.html',
  styleUrl: './landingpage.css',
})
export class Landingpage {


}
