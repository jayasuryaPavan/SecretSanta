import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reveal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reveal.component.html',
  styleUrl: './reveal.component.css'
})
export class RevealComponent implements OnInit {
  pairs: any[] = [];

  ngOnInit() {
    const storedPairs = localStorage.getItem('pairs');
    if (storedPairs) {
      this.pairs = JSON.parse(storedPairs);
    }
  }
}
