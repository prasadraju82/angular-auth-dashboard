import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  stats = [
    {label: 'Users', value: 1200},
    {label: 'Orders', value: 320},
    {label: 'Revenue', value: 54000}
  ];

  users = [
    { name: 'Alice', active: true },
    { name: 'Bob', active: false },
    { name: 'Charlie', active: true }
  ];
}
