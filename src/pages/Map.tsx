import React, { useRef, useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import { IonPage, IonContent, IonHeader, IonButtons, IonMenuButton, IonTitle, IonToolbar, IonIcon, IonItem, useIonRouter } from '@ionic/react';
import { arrowForwardOutline, searchOutline } from "ionicons/icons";
import { SearchResult } from "leaflet-geosearch/dist/providers/provider";

import "leaflet/dist/leaflet.css";
import '../theme/css/Map.css';
import { checkTokenUser } from "../components/function/checkTokenUser";

const MapComponent: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const myProvider = new OpenStreetMapProvider();
  const mapRef = useRef(null);
  const navigation = useIonRouter();

  const travaux = [
    { nom: "Travail 1", statut: "En cours", latitude: 51.505, longitude: -0.09 },
  ];
  useEffect(() => {
    const check = async () => {
      const userData = await checkTokenUser(navigation);
      // console.log("UserData :", userData);
    };

    check();


  }, []);
  const searchPlaces = async () => {
    try {
      const results = await myProvider.search({ query: searchQuery });
      setSearchResults(results);
    } catch (error) {
      console.error("Error searching for places:", error);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton className="bouton-menu"></IonMenuButton>
          </IonButtons>
          <IonTitle className="titre-page">Localisation des travaux en cours</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonItem>
          <IonIcon slot="start" icon={searchOutline} />
          <input className="input-search" type="text" placeholder="Rechercher un lieu..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          <IonIcon icon={arrowForwardOutline} onClick={searchPlaces} className="search-icon" />
        </IonItem>

        <div className="map-container" >
          <MapContainer ref={mapRef} center={[51.505, -0.09]} zoom={13} style={{ height: "500px" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {travaux.map((travail, index) => (
              <Marker key={index} position={[travail.latitude, travail.longitude]}>
                <Popup>
                  <div>
                    <h4>{travail.nom}</h4>
                    <p>Statut: {travail.statut}</p>
                    <p>Latitude: {travail.latitude}</p>
                    <p>Longitude: {travail.longitude}</p>
                  </div>
                </Popup>
              </Marker>
            ))}

            {searchResults.map((result, index) => (
              <Marker key={index} position={[result.y, result.x]}>
                <Popup>
                  <div>
                    <h4>{result.label}</h4>
                    <p>Latitude: {result.y}</p>
                    <p>Longitude: {result.x}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </IonContent>
    </IonPage>
  );
};
export default MapComponent;
