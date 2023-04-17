import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../assets/utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    const user = await createUserDocumentFromAuth(response.user);
  };

  return (
    <div className="sign-in">
      <h2>Sign in page</h2>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  );
};

export default SignIn;
