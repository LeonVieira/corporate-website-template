import { Component } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { DashboardCard } from '../../models/dashboard-card.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  cards: DashboardCard[] = [];

  constructor(private dashboardService: DashboardService) {
    this.cards = this.dashboardService.getCards();
  }
}
