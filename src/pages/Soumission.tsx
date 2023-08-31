import React, { useEffect } from "react";
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonPage,
  IonButtons,
  IonMenuButton,
  IonItem,
  IonLabel,
  IonList,
  IonCol,
  IonListHeader,
  useIonRouter
} from '@ionic/react';
import '../theme/css/Soumission.css';
import { checkTokenUser } from "../components/function/checkTokenUser"

const Soumission: React.FC = () => {
  const navigation = useIonRouter();
  useEffect(() => {
    const userData = checkTokenUser(navigation).then((value) => {
      console.log("UserData :", value);
    });


  }, []);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton className="bouton-menu"></IonMenuButton>
          </IonButtons>
          <IonTitle className="titre-page">Suivi de mes soumissions</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        {/* Tableau de Suivi des Soumissions */}
        <IonList>
          <IonListHeader>
            <IonLabel className="title-custom">Tableau de Suivi des Soumissions</IonLabel>
          </IonListHeader>
          <IonItem className="table-header" lines="full" color="none">
            <IonCol size="2">Numéro</IonCol>
            <IonCol size="1.6">Titre</IonCol>
            <IonCol size="2.5">Date de Soumission</IonCol>
            <IonCol size="2">Statut </IonCol>
            <IonCol size="2.1">Documents Fournis</IonCol>
            <IonCol size="1.8">Action</IonCol>
          </IonItem>

          {/* Exemple d'une entrée de soumission */}
          <IonItem className="multiline-item">
            <IonCol size="2">001</IonCol>
            <IonCol size="1.6">AO-2023-001</IonCol>
            <IonCol size="2.5">2023-07-15</IonCol>
            <IonCol size="2">En Attente</IonCol>
            <IonCol size="2.1">2</IonCol>
            <IonCol size="1.8"><a href="/Acceuil/DetailSoumission">Voir</a></IonCol>
          </IonItem>

          <IonItem className="multiline-item">
            <IonCol size="2">001</IonCol>
            <IonCol size="1.6">AO-2023-001</IonCol>
            <IonCol size="2.5">2023-07-15</IonCol>
            <IonCol size="2">En Attente</IonCol>
            <IonCol size="2.1">2</IonCol>
            <IonCol size="1.8"><a href="/Acceuil/DetailSoumission">Voir</a></IonCol>
          </IonItem>

          <IonItem className="multiline-item">
            <IonCol size="2">001</IonCol>
            <IonCol size="1.6">AO-2023-001</IonCol>
            <IonCol size="2.5">2023-07-15</IonCol>
            <IonCol size="2">En Attente</IonCol>
            <IonCol size="2.1">2</IonCol>
            <IonCol size="1.8"><a href="/Acceuil/DetailSoumission">Voir</a></IonCol>
          </IonItem>
          {/* Fin de la boucle */}
        </IonList>
      </IonContent>
    </IonPage>


  );

};

export default Soumission;
