import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.models';
import { FaceSnapService } from '../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnap!: FaceSnap;
  buttonText!: string;

  constructor(private faceSnapService: FaceSnapService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.buttonText = "Oh snap!";
    const snapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnapById(snapId);
  }

  onSnap() {
    if (this.buttonText == "Oh snap!") {
      this.faceSnapService.snapFaceById(this.faceSnap.id, "snap");
      this.buttonText = "Oops unsnap!"
    } else {
      this.faceSnapService.snapFaceById(this.faceSnap.id, "unsnap");
      this.buttonText = "Oh snap!"
    }
  }

}
