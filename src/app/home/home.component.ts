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
  availableParticipants: any[] = [];
  selectedParticipant: any = null;
  guessedSanta: string = '';
  isRevealed: boolean = false;
  allDone: boolean = false;

  constructor(private participantService: ParticipantService) {
  }

  ngOnInit(): void {
    this.participants = this.participantService.getParticipants();
    this.availableParticipants = [...this.participants]; // Clone the list to track available participants
  }

  // Select a random participant
  selectRandomParticipant() {
    if (this.availableParticipants.length === 0) {
      this.allDone = true;
      this.selectedParticipant = null;
      return;
    }

    const randomIndex = Math.floor(Math.random() * this.availableParticipants.length);
    this.selectedParticipant = this.availableParticipants[randomIndex];
    this.availableParticipants.splice(randomIndex, 1); // Remove the selected participant
    this.guessedSanta = '';
    this.isRevealed = false;
    this.allDone = false;
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