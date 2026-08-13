import { Injectable } from '@angular/core';
import { Solution } from '../models/solution.model';

@Injectable({
  providedIn: 'root',
})
export class SolutionService {
  getSolutions(): Solution[] {
    return [
      {
        title: 'Business Consulting',
        description: '...',
        icon: '💼',
        image: 'images/onbasehylandlogo.png',
        route: '/solutions/document-management',
      },
      {
        title: 'Software Development',
        description: '...',

        icon: '💻',
        image: 'images/softwaredevelopment.png',
        route: '/solutions/document-management',
      },
      {
        title: 'Cloud Services',
        description: '...',
        icon: '☁️',
        image: 'images/yoozlogo.jpg',
        route: '/solutions/document-management',
      },
    ];
  }
}
