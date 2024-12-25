import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { participants } from '../assets/participants';
import { ParticipantService } from '../services/participant.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  participants: any[] = [];
  selectedParticipant: any = null;
  guessedSanta: string = '';
  isRevealed: boolean = false;

  constructor(private participantService: ParticipantService) {
  }

  ngOnInit(): void {
    this.participants = this.participantService.getParticipants();
  }

  // Select a random participant
  selectRandomParticipant() {
    const randomIndex = Math.floor(Math.random() * this.participants.length);
    this.selectedParticipant = this.participants[randomIndex];
    this.guessedSanta = '';
    this.isRevealed = false;
  }

  // Reveal the Santa
  revealSanta() {
    this.isRevealed = true;
  }

  // Get the image for a participant
  getImage(participant: any) {
    let id  = participants.find(p => p.name === participant.santa)?.id;
    return this.participantService.getImageById(id);
  }

}