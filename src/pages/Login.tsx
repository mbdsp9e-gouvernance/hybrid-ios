import React, { useState } from "react";
import {
  IonApp,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonInput,
  IonLabel,
  IonButton,
  IonIcon,
  useIonRouter
} from '@ionic/react';
import { lockClosedOutline, logInOutline, personOutline } from 'ionicons/icons';
import '../theme/css/Login.css';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { writeInExternalStorage } from "../components/function/writeInExternalStorage";

const Login: React.FC = () => {
  const [username, setUsername] = React.useState(String);
  const [password, setPassword] = React.useState(String);

  const navigation = useIonRouter();

  const doLogin = async () => {
    // To replace with data in API
    const userData = {
      username,
    };

    // Save user data to filesystem after successful login
    try {
      const content = JSON.stringify(userData);
      const fileName = 'user_data.json';

      await writeInExternalStorage(content, fileName).then((value) => {
        navigation.push('/Acceuil', 'root', 'replace');
      });

    } catch (error) {
      console.error('Error saving user data:', error);
    }
  }

  return (
    <IonApp>
      <IonContent className='custom-content ion-padding'>
        <IonGrid className='custom-grid' >
          <IonRow>
            <IonCol>
              <IonLabel className="custom-login" position="floating">Connexion</IonLabel>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonIcon slot="start" icon={personOutline} />
                <IonLabel position="floating">Nom d'utilisateur</IonLabel>
                <IonInput className="input-info" value={username} onIonInput={(e: any) => setUsername(e.target.value)}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonIcon slot="start" icon={lockClosedOutline} />
                <IonLabel position="floating">Mot de passe </IonLabel>
                <IonInput className="input-info" type="password" value={password} onIonInput={(e: any) => setPassword(e.target.value)}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton expand="full" className="custom-button" onClick={() => doLogin()}>
                <IonIcon slot="start" icon={logInOutline} />
                Se connecter
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonApp>
  );
};

export default Login;

