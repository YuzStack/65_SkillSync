import { useState } from 'react';
import Header from './Header';
import Main from './Main';
import EditProfile from './EditProfile';

export default function Dashboard() {
  const [showEditProfle, setShowEditProfile] = useState(false);

  return (
    <div className='relative'>
      <Header setShowEditProfile={setShowEditProfile} />
      <Main />

      {showEditProfle && (
        <EditProfile setShowEditProfile={setShowEditProfile} />
      )}
    </div>
  );
}
