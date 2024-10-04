import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RedalService } from '../service/redal.service';
@Component({
  selector: 'app-yaacoub',
  templateUrl: './yaacoub.component.html',
  styleUrl: './yaacoub.component.css'
})
export class YaacoubComponent implements AfterViewInit {

  private map: any;

  constructor(
    private redalservice: RedalService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  async ngAfterViewInit(): Promise<void> {
    if (isPlatformBrowser(this.platformId)) {
      const L = (await import('leaflet')).default;
      this.initMap(L);
      this.loadData(L);
      this.addLegend(L);
    }
  }

  private initMap(L: any): void {
    this.map = L.map('map', {
      center: [34.029, -6.835], // Centrer la carte sur votre zone d'intérêt
      zoom: 13,
      layers: []
    });
    const transparentLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    });
    transparentLayer.addTo(this.map);

  }
  private getStyle(dso: number): any {
    let color = '';
    if (dso > 90) {
      color = 'red';
    } else if (dso >= 60 && dso <= 90) {
      color = 'orange';
    } else if (dso <30) {
      color = 'green';
    }
    return {
      fillColor: color,
      weight: 2,
      opacity: 1,
      color: 'yellow',
      dashArray: '3',
      fillOpacity: 0.7
    };
  }


  private loadData(L: any): void {
    this.redalservice.getYaacoub().subscribe(
      (data: any[]) => {
        if (this.map) {
          // Effacer les couches précédentes si nécessaire
          this.map.eachLayer((layer: any) => {
            if (layer instanceof L.GeoJSON) {
              this.map.removeLayer(layer);
            }
          });

          // Ajouter les nouvelles données
          data.forEach((item: any) => {
            if (Array.isArray(item) && item.length > 6 && item[6]) {
              try {
                const geom = JSON.parse(item[6]); // Parse the GeoJSON string
                const dso = parseFloat(item[3]);

                L.geoJSON(geom, {style: this.getStyle(dso),
                  onEachFeature: (feature:any, layer:any) => {
                    const popupContent = `
                     <div>
                      <strong>Nom :</strong> ${item[1]}<br>
                      <strong>Nombre de clients :</strong> ${item[2]}<br>
                      // <strong>DSO (jr) :</strong>  ${item[3]}<br>
                      // <strong>Quartier :</strong>  ${item[4]}<br>
                      <strong>Impayés MDH :</strong> ${item[5]}<br>
                    </div>
                  `;
                  layer.bindPopup(popupContent);
                }
                    // Configure des événements ou des styles ici si nécessaire

                }).addTo(this.map);
              } catch (e) {
                console.error('Erreur lors du parsing du GeoJSON:', e);
              }
            } else {
              console.warn('La propriété geom est manquante ou invalide:', item);
            }
          });
        }
      },
      error => {
        console.error('Erreur lors du chargement des données:', error);
        alert('Échec du chargement des données. Veuillez réessayer plus tard.');
      }
    );
  }
  private addLegend(L: any): void {
    const legend = L.control({ position: 'bottomright' });

    legend.onAdd = function () {
      const div = L.DomUtil.create('div', 'legend');
      const grades = ['<30', '30-60', '60-90', '>90'];
      const colors = ['green', 'yellow', 'orange', 'red'];
      const labels = [];

      for (let i = 0; i < grades.length; i++) {
        labels.push(
          '<i style="background:' + colors[i] + '; width: 30px; height: 30px; display: inline-block; margin-right: 24px;"></i> ' +
          '<span style="font-size: 18px;">' + grades[i] + '</span>'
        );
      }

      div.innerHTML = '<h4>Légende : DSO (jr)</h4>' + labels.join('<br>');

      div.style.backgroundColor = 'white'; // Background color
      div.style.padding = '15px'; // Padding
      div.style.borderRadius = '5px'; // Rounded corners
      div.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.2)'; // Shadow for better visibility
      div.style.fontSize = '16px'; // Font size

      return div;
    };

    legend.addTo(this.map);
  }

}
