import React, { useEffect, useState } from "react";
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
import { wsUrl } from "../components/function/getUrlWebService";
import { format } from "date-fns";

const Soumission: React.FC = () => {
  const navigation = useIonRouter();
  const [submissionData, setSubmissionData] = useState<any[]>();

  useEffect(() => {
    const fetchData = async () => {
      const userData = await checkTokenUser(navigation);
      // console.log("UserData :", userData);

      const webServiceUrl = await wsUrl("/soumissions");

      if (webServiceUrl) {
        const response = await fetch(webServiceUrl);
        const data = await response.json();
        setSubmissionData(data.soumissions);
      } else {
        console.error("Web service URL not defined in .env");
      }
    };

    fetchData();


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
            <IonCol size="1.8">Titre</IonCol>
            <IonCol size="3.1">Date de Soumission</IonCol>
            <IonCol size="2.2">Statut </IonCol>
            <IonCol size="3">Documents Fournis</IonCol>
            <IonCol size="2">Action</IonCol>
          </IonItem>

          {submissionData && submissionData.length && submissionData.map((submission, index) => (
            <IonItem className="multiline-item" key={index}>
              <IonCol size="1.8">{submission.tender.title}</IonCol>
              <IonCol size="3.1">{format(new Date(submission.dateSoumission), "dd/MM/yyyy HH:mm:ss")}</IonCol>
              <IonCol size="2.2">{submission.status === 1 ? (<>Validé</>) : submission.status === 0 && (<>Rejeté</>)}</IonCol>
              <IonCol size="3">document a fournir</IonCol>
              <IonCol size="2">
                <a href={`/Accueil/DetailSoumission/${submission._id}`}>Voir</a>
              </IonCol>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>


  );

};

export default Soumission;
