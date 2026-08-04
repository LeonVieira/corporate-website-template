import { Injectable } from '@angular/core';
import { DashboardCard } from '../models/dashboard-card.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  getCards(): DashboardCard[] {
    return [
      {
        title: 'Business Consulting',
        description: 'Helping organizations improve processes and achieve sustainable growth through technology.',
        icon: '💼',
        route: '/solutions'
      },
      {
        title: 'Software Development',
        description: 'Custom web and enterprise applications built around your business requirements.',
        icon: '💻',
        route: '/products'
      },
      {
        title: 'Cloud Services',
        description: 'Reliable cloud hosting, migration, and infrastructure solutions for modern businesses.',
        icon: '☁️',
        route: '/services'
      }
    ];
  }

}