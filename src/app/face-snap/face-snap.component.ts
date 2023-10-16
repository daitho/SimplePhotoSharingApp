import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.models';
import { FaceSnapService } from '../services/face-snaps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  @Input()
  faceSnap!: FaceSnap;

  buttonText!: string;

  constructor(private faceSnapservice: FaceSnapService,
    private router: Router) { }

  ngOnInit(): void {
    this.buttonText = "Oh snap!"
  }

  onSnap() {
    if (this.buttonText == "Oh snap!") {
      this.faceSnapservice.snapFaceById(this.faceSnap.id, "snap");
      this.buttonText = "Oops unsnap!"
    } else {
      this.faceSnapservice.snapFaceById(this.faceSnap.id, "unsnap");
      this.buttonText = "Oh snap!"
    }
  }

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
