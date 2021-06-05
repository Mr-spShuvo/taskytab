import React, { createContext, useEffect, useState } from 'react';
import { Loading } from '../common';

import { auth, db, providerGithub, providerGoogle } from '../firebase';
import { getDocsWithId } from '../utils';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
  const sendPasswordResetEmail = email => auth.sendPasswordResetEmail(email);
  const confirmPasswordReset = (code, password) =>
    auth.confirmPasswordReset(code, password);
  const signOut = () => auth.signOut();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      handleUser(user).then(userDoc => {
        setIsLoading(false);
        setUser(userDoc);
      });
    });
    return () => unsubscribe();
  }, []);

  const value = {
    isLoading,
    user,
    signInWithEmailPassword,
    signUpWithEmailPassword,
    signInWithGoogle,
    signInWithGithub,
    signOut,
    sendPasswordResetEmail,
    confirmPasswordReset
  };

  return (
    <AuthContext.Provider value={value}>
      {isLoading ? <Loading /> : children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
