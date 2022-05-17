import faker from '@faker-js/faker';
import { Mappable } from '../models';

export class Map {
  private googleMap: google.maps.Map | null;

  constructor(divId: string) {
    const mapElement: HTMLElement | null = document.getElementById(divId);

    this.googleMap = mapElement
      ? new google.maps.Map(mapElement, {
          zoom: 1,
          center: {
            lat: 0,
            lng: 0,
          },
        })
      : null;
  }

  private createInfoWindow(entity: Mappable): google.maps.InfoWindow {
    return new google.maps.InfoWindow({
      content: entity.getMarkerContent(),
    });
  }

  addMarker(entity: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: entity.location,
    });

    const infoWindow = this.createInfoWindow(entity);

    marker.addListener('click', () => {
      infoWindow.open(this.googleMap, marker);
    });
  }
}
