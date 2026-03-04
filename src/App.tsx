/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MobileLayout } from './components/Layout';
import { Login } from './screens/Login';
import { Register } from './screens/Register';
import { ForgotPassword } from './screens/ForgotPassword';
import { Dashboard } from './screens/Dashboard';
import { FormsMenu } from './screens/FormsMenu';
import { BloodSugarTracking } from './screens/BloodSugarTracking';
import { PhysicalActivity } from './screens/PhysicalActivity';
import { NutritionAssessment } from './screens/NutritionAssessment';
import { DailyGoals } from './screens/DailyGoals';
import { Education } from './screens/Education';
import { FAQ } from './screens/FAQ';
import { Notifications } from './screens/Notifications';
import { Survey } from './screens/Survey';
import { Emergency } from './screens/Emergency';

type Screen = 'login' | 'register' | 'forgot-password' | 'dashboard' | 'forms' | 'blood-sugar' | 'physical-activity' | 'nutrition' | 'goals' | 'education' | 'faq' | 'notifications' | 'survey' | 'emergency';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentScreen('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentScreen('login');
  };

  const navigateTo = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  const goBack = () => {
    if (['register', 'forgot-password'].includes(currentScreen)) setCurrentScreen('login');
    else if (currentScreen === 'forms') setCurrentScreen('dashboard');
    else if (['blood-sugar', 'physical-activity', 'nutrition'].includes(currentScreen)) setCurrentScreen('forms');
    else if (['goals', 'education', 'faq', 'notifications', 'survey', 'emergency'].includes(currentScreen)) setCurrentScreen('dashboard');
  };

  const getTitle = () => {
    switch (currentScreen) {
      case 'dashboard': return 'Anasayfa';
      case 'forms': return 'Formlar';
      case 'blood-sugar': return 'Kan Şekeri İzlemlerim';
      case 'physical-activity': return 'Fiziksel Aktivitelerim';
      case 'nutrition': return 'Beslenme Değerlendirme';
      case 'goals': return 'Günlük Hedefler';
      case 'education': return 'Eğitimler';
      case 'faq': return 'Sıkça Sorulan Sorular';
      case 'notifications': return 'Bildirimler';
      case 'survey': return 'Anket';
      case 'emergency': return 'Acil Durum';
      default: return '';
    }
  };

  if (!isLoggedIn) {
    return (
      <MobileLayout>
        {currentScreen === 'login' && (
          <Login 
            onLogin={handleLogin} 
            onNavigateRegister={() => navigateTo('register')}
            onNavigateForgot={() => navigateTo('forgot-password')}
          />
        )}
        {currentScreen === 'register' && (
          <Register 
            onBack={() => navigateTo('login')} 
            onRegister={handleLogin} 
          />
        )}
        {currentScreen === 'forgot-password' && (
          <ForgotPassword 
            onBack={() => navigateTo('login')} 
          />
        )}
      </MobileLayout>
    );
  }

  return (
    <MobileLayout 
      title={getTitle()} 
      showBack={currentScreen !== 'dashboard'} 
      onBack={goBack}
      showLogout={currentScreen === 'dashboard'}
      onLogout={handleLogout}
    >
      {currentScreen === 'dashboard' && <Dashboard onNavigate={(s) => navigateTo(s as Screen)} />}
      {currentScreen === 'forms' && <FormsMenu onNavigate={(s) => navigateTo(s as Screen)} />}
      {currentScreen === 'blood-sugar' && <BloodSugarTracking />}
      {currentScreen === 'physical-activity' && <PhysicalActivity />}
      {currentScreen === 'nutrition' && <NutritionAssessment />}
      {currentScreen === 'goals' && <DailyGoals />}
      {currentScreen === 'education' && <Education />}
      {currentScreen === 'faq' && <FAQ />}
      {currentScreen === 'notifications' && <Notifications />}
      {currentScreen === 'survey' && <Survey />}
      {currentScreen === 'emergency' && <Emergency />}
    </MobileLayout>
  );
}
