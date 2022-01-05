import { useEffect, useState } from "react";
import firebase from "../firebase";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

export default function useFirebaseAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const authStateChanged = (user) => {
    if (!user) {
      setUser(null);
      setLoading(false);
    }
    setLoading(true);
    setUser(user);
    setLoading(false);
  };

  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;

        setUser(user);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  useEffect(() => {
    const unsub = () => {
      firebase.auth().onAuthStateChanged(authStateChanged);
    };
    unsub();
  }, []);

  return { user, loading, loginWithGoogle };
}
