import { Component } from '@angular/core';
import { SolutionService } from '../../services/solution.service';
import { Solution } from '../../models/solution.model';

@Component({
  selector: 'app-solutions',
  imports: [],
  templateUrl: './solutions.html',
  styleUrl: './solutions.css',
})
export class Solutions {

  solutions: Solution[] = [];

  constructor(private solutionService: SolutionService) {
    this.solutions = this.solutionService.getSolutions();
  }

}