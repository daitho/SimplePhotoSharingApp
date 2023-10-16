import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.models";

@Injectable({
  providedIn: 'root'
})
export class FaceSnapService {

  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Archibald',
      description: 'Mon meilleur ami depuis to9999ut petit !',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps: 200,
      localisation: "Paris"
    },
    {
      id: 2,
      title: 'Beauté afraicaine',
      description: 'Cette jolie creature est une beauté Africaine !',
      imageUrl: 'https://i.pinimg.com/originals/0c/db/2b/0cdb2b683bacf00658b977761a76d03b.jpg',
      createdDate: new Date(),
      snaps: 0,
      localisation: "Douala"
    },
    {
      id: 3,
      title: 'Fooball africain',
      description: 'Les footballeurs les plus talentueux en d\'afrique !',
      imageUrl: 'https://www.africatopsports.com/wp-content/uploads/2015/11/12170002_1282786635080379_671733767_o.jpg',
      createdDate: new Date(),
      snaps: 0
    },
    {
      id: 4,
      title: 'Archibald',
      description: 'Mon meilleur ami depuis tout petit !',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps: 0,
      localisation: "Paris"
    },
    {
      id: 5,
      title: 'Beauté afraicaine',
      description: 'Cette jolie creature est une beauté Africaine !',
      imageUrl: 'https://afroculture.net/wp-content/uploads/2016/12/mariage-africain.jpg',
      createdDate: new Date(),
      snaps: 0,
      localisation: "Douala"
    },
    {
      id: 6,
      title: 'Fooball africain',
      description: 'Les footballeurs les plus talentueux en d\'afrique !',
      imageUrl: 'https://www.nairaland.com/attachments/2833373_cameroon_jpege02cc962876776134fed1fc046e2d04f',
      createdDate: new Date(),
      snaps: 0
    }
  ];

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id == faceSnapId);
    if (!faceSnap) {
      throw new Error("FaceSnap not found!.");
    } else {
      return faceSnap;
    }
  }

  snapFaceById(faceSnapId: number, snapStatus: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapStatus === "snap" ? faceSnap.snaps++ : faceSnap.snaps--;
  }

}
