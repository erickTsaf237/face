import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snaps.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  
  @Input() faceSnap!: FaceSnap;
  title!: string;
  description!:string;
  createdDate!:Date;
  snaps!: number;
  imageUrl!: string;

  butonText: string = 'oh snap'

  ngOnInit(): void {
    this.title = 'Erick Tsafack'
    this.description= 'je conais la sap de puis longtemps'
    this.createdDate = new Date();
    this.snaps = 68
    this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg'
  }

  onClickSnaps(){
    this.faceSnap.snaps+= this.butonText=='oh snap'?1:-1;
    this.butonText = this.butonText=='oh snap'?'ohhh':'oh snap'
    
  }
}
