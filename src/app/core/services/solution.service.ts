import { Injectable } from '@angular/core';
import { Solution } from '../models/solution.model';

@Injectable({
  providedIn: 'root',
})
export class SolutionService {
  getSolutions(): Solution[] {
    return [
      {
  title: 'Business Consulting & Process Automation',
  description:
    'Improve business processes, reduce manual work, and build more efficient workflows with practical technology solutions.',

  image: 'images/onbasehylandlogo.png',
  route: '/solutions/business-consulting',
      },
      {
  title: 'Custom Software Development',
  description:
    'Design and develop tailored web and business applications that integrate with your existing systems and support your unique requirements.',

  
        image: 'images/softwaredevelopment.png',
        route: '/solutions/document-management',
      },
      {
  title: 'Cloud & Document Management',
  description:
    'Modernize document and information management with secure cloud solutions that make your business data easier to access and manage.',

        image: 'images/yoozlogo.jpg',
        route: '/solutions/document-management',
      },
    ];
  }
}
