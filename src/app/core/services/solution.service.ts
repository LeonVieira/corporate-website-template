import { Injectable } from '@angular/core';
import { Solution } from '../models/solution-card.model';

@Injectable({
  providedIn: 'root'
})
export class SolutionService {

  getSolutions(): Solution[] {
return [
{
    title: "Business Consulting",
    description: "...",
    icon: "💼"
},
{
    title: "Software Development",
    description: "...",
    icon: "💻"
},
{
    title: "Cloud Services",
    description: "...",
    icon: "☁️"
}
];
  }
}