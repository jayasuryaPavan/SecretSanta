import { Component, OnInit } from '@angular/core';
import { ParticipantService } from '../../participant.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  participants: any[] = [];
  pairs: any[] = [];

  constructor(private participantService : ParticipantService, private router: Router) {}

  ngOnInit() {
    // Load participants from JSON file
    // this.http.get<any[]>('assets/participants.json').subscribe((data) => {
    //   this.participants = data;
    // });
  }

  randomizePairs() {
    const shuffled = [...this.participants].sort(() => Math.random() - 0.5);
    this.pairs = shuffled.map((santa, i) => ({
      santa: shuffled[i],
      recipient: shuffled[(i + 1) % shuffled.length],
    }));
    localStorage.setItem('pairs', JSON.stringify(this.pairs));
    this.router.navigate(['/reveal']);
  }
}