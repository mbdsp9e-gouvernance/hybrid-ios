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
import { wsUrl } from "../components/function/getUrlWebService";

const Login: React.FC = () => {
  const [email, setEmail] = React.useState(String);
  const [password, setPassword] = React.useState(String);

  const navigation = useIonRouter();

  const doLogin = async () => {
    const loginUrl = await wsUrl("/users/login");
    try {
      const response = await fetch(`${loginUrl}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      });

      if (response.ok) {
        const userData = await response.json();

        // Save user data to filesystem after successful login
        const content = JSON.stringify(userData);
        const fileName = 'user_data.json';

        await writeInExternalStorage(content, fileName);
        navigation.push('/Accueil', 'root', 'replace');
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
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
                <IonLabel position="floating">Adresse e-mail</IonLabel>
                <IonInput className="input-info" value={email} onIonInput={(e: any) => setEmail(e.target.value)}></IonInput>
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

