import React, { useState } from "react";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonPage,
  IonButtons,
  IonMenuButton,
  IonCol,
  IonItem,
  IonContent,
  IonList,
  IonButton,
  IonIcon,
} from '@ionic/react';
import '../theme/css/DetailSoumission.css';
import { caretUp, caretDown } from "ionicons/icons";

const DetailSoumission: React.FC = () => {
  const [showMoreDetails, setShowMoreDetails] = useState(false);

  const toggleShowMoreDetails = () => {
    setShowMoreDetails(!showMoreDetails);
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton className="bouton-menu"></IonMenuButton>
          </IonButtons>
          <IonTitle className="titre-page">Detail Soumission</IonTitle>
        </IonToolbar>

      </IonHeader>
      <IonContent className="ion-padding">
        {/* Tableau de Suivi des Soumissions */}
        <IonList>
          <IonItem className="table-header" lines="full" color="none">
            <IonCol size="6">TYPE</IonCol>
            <IonCol size="6">DETAIL</IonCol>
          </IonItem>

          <IonItem className="multiline-item">
            <IonCol size="6">NUMERO DE LA SOUMISSION</IonCol>
            <IonCol size="6">AO-2023-001</IonCol>
          </IonItem>
          <IonItem className="multiline-item">
            <IonCol size="6">TITRE DE L'APPEL D'OFFRE</IonCol>
            <IonCol size="6">AO-2023-001</IonCol>
          </IonItem>
          <IonItem className="multiline-item">
            <IonCol size="6">DATE DE SOUMISSION</IonCol>
            <IonCol size="6">AO-2023-001</IonCol>
          </IonItem>
          <IonItem className="multiline-item">
            <IonCol size="6">STATUT</IonCol>
            <IonCol size="6">En attente</IonCol>
          </IonItem>
          <IonItem className="multiline-item">
            <IonCol size="6">DOCUMENT FOURNIS</IonCol>
            <IonCol size="6">
              <ul className="document-list">
                <li> <a href="#">Document1.pdf</a></li>
                <li> <a href="#">Document2.pdf</a></li>
                <li> <a href="#">Document3.pdf</a></li>
                <li> <a href="#">Document4.pdf</a></li>
              </ul>
            </IonCol>
          </IonItem>
          {showMoreDetails && (
            <>
              <IonItem className="multiline-item">
                <IonCol size="6">REFERENCE</IonCol>
                <IonCol size="6">AO-2023-001</IonCol>
              </IonItem>
              <IonItem className="multiline-item">
                <IonCol size="6">TITRE</IonCol>
                <IonCol size="6">AO-2023-001</IonCol>
              </IonItem>
              <IonItem className="multiline-item">
                <IonCol size="6">DESCRIPTION </IonCol>
                <IonCol size="6">Description de l'appel d'offre...</IonCol>
              </IonItem>
              <IonItem className="multiline-item">
                <IonCol size="6">DATE D'EMISSION</IonCol>
                <IonCol size="6">2023-08-09</IonCol>
              </IonItem>
              <IonItem className="multiline-item">
                <IonCol size="6">DATE LIMITE</IonCol>
                <IonCol size="6">2023-08-30</IonCol>
              </IonItem>
              <IonItem className="multiline-item">
                <IonCol size="6">CRITÈRES ASSOCIÉS</IonCol>
                <IonCol size="6">
                  <ul className="document-list">
                    <li> <span className="intitule-label">Intitulé 1:</span> Description 1....</li>
                    <li> <span className="intitule-label">Intitulé 2:</span> Description 2....</li>
                    <li> <span className="intitule-label">Intitulé 3:</span> Description 3....</li>
                  </ul>
                </IonCol>
              </IonItem>
            </>
          )}
          <IonItem className="multiline-item" lines="full" color="none">
            <IonCol size="7">
              <IonButton fill="clear" onClick={toggleShowMoreDetails} className="button-toggle">
                <IonIcon icon={showMoreDetails ? caretUp : caretDown} />
                {showMoreDetails ? "Voir moins" : "Voir plus"}
              </IonButton>
            </IonCol>
          </IonItem>


        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default DetailSoumission;
