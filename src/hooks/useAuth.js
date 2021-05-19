import { useState } from 'react';
import { useEffect } from 'react';
import { auth, db, providerGithub, providerGoogle } from '../firebase';
import { getDocsWithId } from '../utils';

export const useAuth = () => {
  const [user, setUser] = useState(null);

  const handleUser = async (user, additionalData) => {
    if (!user) return null;

    const userRef = db.collection('users').doc(user.uid);
    const userDoc = await userRef.get();

    if (!userDoc.exists) {
      const { displayName, email, photoURL, providerData } = user;
      const provider = providerData[0].providerId;

      const createdAt = new Date();

      try {
        const newUser = {
          displayName,
          email,
          createdAt,
          photoURL,
          provider,
          ...additionalData
        };
        await userRef.set(newUser);
        await db.collection('tabs').add({ name: 'Inbox', userId: user.uid });
      } catch (error) {
        // TODO - Handle Error
      }
    }
    return (
      user.uid && getDocsWithId(await db.collection('users').doc(user.uid).get())
    );
  };

  const signInWithEmailPassword = (email, password) =>
    auth.signInWithEmailAndPassword(email, password);
  const signUpWithEmailPassword = (email, password) =>
    auth.createUserWithEmailAndPassword(email, password);
  const signInWithGoogle = () => auth.signInWithPopup(providerGoogle);
  const signInWithGithub = () => auth.signInWithPopup(providerGithub);
  const signOut = () => auth.signOut();
  const sendPasswordResetEmail = email => auth.sendPasswordResetEmail(email);
  const confirmPasswordReset = (code, password) =>
    auth.confirmPasswordReset(code, password);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      handleUser(user).then(userDoc => setUser(userDoc));
    });
    return () => unsubscribe();
  }, []);

  return {
    user,
    signInWithEmailPassword,
    signUpWithEmailPassword,
    signInWithGoogle,
    signInWithGithub,
    signOut,
    sendPasswordResetEmail,
    confirmPasswordReset
  };
};
