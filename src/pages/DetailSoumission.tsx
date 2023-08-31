import React, { useEffect, useState } from "react";
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
  useIonRouter
} from '@ionic/react';
import '../theme/css/DetailSoumission.css';
import { caretUp, caretDown } from "ionicons/icons";
import { wsUrl } from "../components/function/getUrlWebService";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { checkTokenUser } from "../components/function/checkTokenUser";

const DetailSoumission: React.FC = () => {
  const { submissionId } = useParams<{ submissionId: string }>();
  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const [submissionData, setSubmissionData] = useState<any>();
  const [critereData, setCritereData] = useState<any[]>();
  const navigation = useIonRouter();

  useEffect(() => {
    const fetchData = async () => {
      const userData = await checkTokenUser(navigation);
      const urlWs = `/soumissions/${submissionId}`;
      const webServiceUrl = await wsUrl(urlWs);

      if (webServiceUrl) {
        const response = await fetch(webServiceUrl);
        const data = await response.json();
        setCritereData(data.soumission.tender.critere)
        setSubmissionData(data.soumission);

      } else {
        console.error("Web service URL not defined in .env");
      }
    };

    fetchData();


  }, []);

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
      {submissionData && (<><IonContent className="ion-padding">
        <IonList>
          <IonItem className="table-header" lines="full" color="none">
            <IonCol size="6">TYPE</IonCol>
            <IonCol size="6">DETAIL</IonCol>
          </IonItem>

          <IonItem className="multiline-item">
            <IonCol size="6">NUMERO DE LA SOUMISSION</IonCol>
            <IonCol size="6">{submissionData._id}</IonCol>
          </IonItem>
          <IonItem className="multiline-item">
            <IonCol size="6">TITRE DE L'APPEL D'OFFRE</IonCol>
            <IonCol size="6">{submissionData.tender.title}</IonCol>
          </IonItem>
          <IonItem className="multiline-item">
            <IonCol size="6">DATE DE SOUMISSION</IonCol>
            <IonCol size="6">{format(new Date(submissionData.dateSoumission), "dd/MM/yyyy HH:mm:ss")}</IonCol>
          </IonItem>
          <IonItem className="multiline-item">
            <IonCol size="6">STATUT</IonCol>
            <IonCol size="6">{submissionData.status === 1 ? (<>Validé</>) : submissionData.status === 0 && (<>Rejeté</>)}</IonCol>
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
                <IonCol size="6">{submissionData.tender.reference}</IonCol>
              </IonItem>
              <IonItem className="multiline-item">
                <IonCol size="6">DESCRIPTION </IonCol>
                <IonCol size="6">{submissionData.tender.description}</IonCol>
              </IonItem>
              <IonItem className="multiline-item">
                <IonCol size="6">DATE D'EMISSION</IonCol>
                <IonCol size="6">{format(new Date(submissionData.tender.dateEmission), "dd/MM/yyyy HH:mm:ss")}</IonCol>
              </IonItem>
              <IonItem className="multiline-item">
                <IonCol size="6">DATE LIMITE</IonCol>
                <IonCol size="6">{format(new Date(submissionData.tender.dateLimit), "dd/MM/yyyy HH:mm:ss")}</IonCol>
              </IonItem>
              {
                critereData && (<>
                  <IonItem className="multiline-item">
                    <IonCol size="6">CRITÈRES ASSOCIÉS</IonCol>
                    <IonCol size="6">
                      <ul className="document-list">
                        {critereData.map((element, index) => (
                          <li><span className="intitule-label">Titre :</span>{element.entitle} <span className="intitule-label">Description :</span>{element.description}</li>
                        ))}
                      </ul>
                    </IonCol>
                  </IonItem>
                </>)
              }
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
      </>)}

    </IonPage>
  );
};

export default DetailSoumission;
