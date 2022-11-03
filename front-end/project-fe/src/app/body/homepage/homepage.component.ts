import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  // slideConfig={
  //   infinite: true,
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   dots: false,
  //   arrows: false,
  //   responsive: [{
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 3,
  //       slidesToScroll: 1
  //     }
  //   },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1
  //       }
  //     },
  //     {
  //       breakpoint: 400,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // };
  // images=[
  //   {img:"assets/images/clients-logo/client-logo-1.png"},
  //   {img:"assets/images/clients-logo/client-logo-2.png"},
  //   {img:"assets/images/clients-logo/client-logo-3.png"},
  //   {img:"assets/images/clients-logo/client-logo-4.png"},
  //   {img:"assets/images/clients-logo/client-logo-5.png"},
  //   {img:"assets/images/clients-logo/client-logo-1.png"},
  //   {img:"assets/images/clients-logo/client-logo-2.png"},
  //   {img:"assets/images/clients-logo/client-logo-3.png"},
  //   {img:"assets/images/clients-logo/client-logo-4.png"},
  //   {img:"assets/images/clients-logo/client-logo-5.png"}
  // ];

  constructor() { }

  ngOnInit(): void {
  }

}
