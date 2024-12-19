import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlbumBoxComponent } from './albumboxcomponent';

@Component({
  selector: 'picturecomponent',
  standalone: true,
  imports: [RouterOutlet, AlbumBoxComponent],
  templateUrl: './picturecomponent.html',
})
export class PictureComponent {
  title = 'social-vibes-album';

  album1 = [
    'https://i.ibb.co/WtxcwJq/59a5e801-e512-4b73-8728-5dbebb64da95.jpg',
    'https://i.ibb.co/j8FwLqP/rf23-280623-fotos-af-kim-matthaei-leland-046-1600px.jpg',
    'https://i.ibb.co/qFRnP1d/20240705-skrillex-orange-highres-photographerjacobfredegaardhansen-rf24-16-1600px-1-1.jpg',
    'https://i.ibb.co/NNxbndj/2001-foto-rockphoto.jpg',
    'https://i.ibb.co/FKNTwJJ/1976-testopstilling-ved-ridge-farm-surrey-storbritannien-i-maj-1976-foto-bill-harkin.jpg',
    'https://i.ibb.co/k98WbSQ/2025-rendering-sune-amtoft-cleanslate-production-aps.jpg',
  ];

  album2 = [
    'https://i.ibb.co/JH2CR8N/campsites-at-roskilde-festival-2017-2.jpg',
    'https://i.ibb.co/ccQHSHF/dreacity-campsite-at-roskilde-festival-2017.jpg',
    'https://i.ibb.co/1R7Gj0H/campsites-at-roskilde-festival-2017-1.jpg',
    'https://i.ibb.co/bWty1Cy/roskilde-festival-2017.jpg',
    'https://i.ibb.co/31FLkmv/campsites-at-roskilde-festival-2017.jpg',
    'https://i.ibb.co/WWs9ZTT/discover-roskilde-festival-s-dream-city-campsite-at-the-music-festival-site-in-denmark.jpg',
  ];

  album3 = [
    'https://i.ibb.co/SPyrHjP/468670394-10160001404766706-8695191331841894888-n.jpg',
    'https://i.ibb.co/5954XbL/1498703290457-kenneth1.jpg',
    'https://i.ibb.co/4J4KhbB/Vig-festival-2.jpg',
    'https://i.ibb.co/ByDq3dH/106743383.jpg',
    'https://i.ibb.co/b7cMNgM/download-1.jpg',
    'https://i.ibb.co/Rgj3cdF/download.jpg',
  ];
}
