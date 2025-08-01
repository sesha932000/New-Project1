// features/temple-listing/services/temple.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Temple {
  id: string;
  name: string;
  location: string;
  description: string;
  imageUrl: string;
  promoted?: boolean;
}

@Injectable({ providedIn: 'root' })
export class TempleService {
  private temples: Temple[] = [
    {
      id: '1',
      name: 'Kabaleeshwar Temple',
      location: 'Chennai',
      description: 'Kapaleeswarar Temple stands as a testament to Tamil Nadus profound religious and cultural heritage. This ancient shrine, dedicated to Lord Shiva as Kapaleeswar and Goddess Shakthi (commonly referred to as Karpagambal), exudes reverence and mystique that has attracted devotees and tourists for centuries alike.',
      imageUrl: 'assets/images/icons/card_images/chennai.png',
      promoted: true
    },
    {
      id: '2',
      name: 'Somnath Temple',
      location: 'Gujarat',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat lorem ac erat maximus vulputate',
      imageUrl: 'assets/images/icons/card_images/gujarat.jpg'
    },
    {
      id: '3',
      name: 'Golden Temple',
      location: 'Amritsar',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat lorem ac erat maximus vulputate',
      imageUrl:'assets/images/icons/card_images/amristar.jpg'
    },
    {
      id: '4',
      name: 'Meenakshi Temple',
      location: 'Madurai',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat lorem ac erat maximus vulputate',
      imageUrl: 'assets/images/icons/card_images/madurai.jpg'
    },
    {
      id: '5',
      name: 'Kashi Temple',
      location: 'Varanasi',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat lorem ac erat maximus vulputate',
      imageUrl: 'assets/images/icons/card_images/varanasi.jpg'
    },
    {
      id: '6',
      name: 'Jagannath Temple',
      location: 'Puri',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat lorem ac erat maximus vulputate',
      imageUrl: 'assets/images/icons/card_images/puri.jpg'
    },
    {
      id: '7',
      name: 'Vaishno Devi',
      location: 'Katra',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat lorem ac erat maximus vulputate',
      imageUrl: 'assets/images/icons/card_images/katra.jpg'
    },
    {
      id: '8',
      name: 'Akshardham Temple',
      location: 'New Delhi',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat lorem ac erat maximus vulputate',
      imageUrl: 'assets/images/icons/card_images/newdelhi.jpg'
    },
    {
      id: '9',
      name: 'Brihadeeswarar Temple',
      location: 'Thanjavur',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat lorem ac erat maximus vulputate',
      imageUrl: 'assets/images/icons/card_images/thanjavur.jpg'
    },
    {
      id: '10',
      name: 'Tirupati Tirumala',
      location: 'Tirumala',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat lorem ac erat maximus vulputate',
      imageUrl: 'assets/images/icons/card_images/tirumali.jpg'
    }
  ];

  getTemples(): Observable<Temple[]> {
    return of(this.temples);
  }

  getTempleById(id: string): Temple | undefined {
    return this.temples.find(t => t.id === id);
  }
}
