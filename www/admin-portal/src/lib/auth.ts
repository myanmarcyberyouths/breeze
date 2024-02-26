import {getAuthUser, SignInCredentialDTO, signInWithEmailAndPassword} from "~/features/auth/api";
import {initAuth} from "@breeze/react-auth";
import storage from "~/lib/storage.ts";


const handleUserResponse = async (data: { access_token: string }) => {
  const {access_token}: {
    access_token: string;
  } = data;

  storage.setToken(access_token);

  return access_token;
}

const signInUser = async (data: SignInCredentialDTO) => {
  const response = await signInWithEmailAndPassword(data);
  return await handleUserResponse(response);
  // window.location.assign(window.location.origin as unknown as string);
}

const signOutUser = async () => {
  storage.clearToken();
  return Promise.resolve();
  // window.location.assign(window.location.origin as unknown as string);
}

export const {useAuthUser, useSignInUser, useSignOutUser} = initAuth({
  signInUserFn: signInUser,
  signOutUserFn: signOutUser,
  getAuthUserFn: getAuthUser,
  signUpUserFn: async () => Promise.resolve(),
})
