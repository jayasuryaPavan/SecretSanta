import { Injectable } from '@angular/core';
import { images, participants } from '../assets/participants';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {
  private participants = participants;
  private images = images;

  // Get all participants
  getParticipants() {
    return this.participants;
  }

  // Get image by participant ID
  getImageById(id: string|any) {
    return this.images.find((img) => img.id === id)?.image;
  }
}
