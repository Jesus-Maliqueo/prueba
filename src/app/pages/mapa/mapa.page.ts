import { Component, OnInit } from '@angular/core';
import {Marker} from '../../interfaces/interfaces';
import {MenuController} from '@ionic/angular'


declare var google;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  map= null;

  markers: Marker[] = [
    {
      position: {
        lat: -33.53582533054736,
        lng:  -70.65477005309667,
      },
      title: 'Reciclado.cl'
    },
    {
      position: {
        lat: -33.513149471217126,
        lng: -70.71749175611548,
      },
      title: 'punto de reciclaje'
    },
    {
      position: {
        lat: -33.49570395885626,
        lng: -70.72751487396413,
      },
      title: 'Recycling Ecologist Services'
    },
    {
      position: {
        lat: -33.51066266402299,
        lng: -70.725781540139,
      },
      title: 'PLASTECO'
    },
  ];

  constructor(private menuController: MenuController) { }

  ngOnInit() {
    this.loadMap();
  }



  loadMap() {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
    // create LatLng object
    const myLatLng = {lat: -33.428123313839535, lng: -70.66855549068917};
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });
  
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
      this.renderMarkers();
    });
  }

  renderMarkers() {
    this.markers.forEach(marker => {
      this.addMarker(marker);
    });
  }

  addMarker(marker: Marker) {
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title
    });
  }
  mostrarMenu(){
    this.menuController.open('first');
  }

  

}
