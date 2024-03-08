import {createFileRoute, redirect, useNavigate} from '@tanstack/react-router'
import {useSignInUser} from "~/lib/auth.ts";
import {Button} from "@breeze/ui";
import {authStore} from "~/store";
import {flushSync} from "react-dom";

export const Route = createFileRoute('/auth/login')({
  component: Login,
  beforeLoad: ({context: {auth}}) => {
    if (auth) {
      throw redirect({
        to: '/dashboard/home'
      })
    }
  }
})


function Login() {
  const navigate = useNavigate()

  const signInUser = useSignInUser({
    onSuccess: (user) => {
      flushSync(() => {
        authStore.setState(state => {
          return {
            ...state,
            user,
          }
        })
        navigate({
          to: '/dashboard/home'
        })
      })
    }
  })

  const onLogin = async () => {
    await signInUser.mutateAsync({
      email: 'admin@breezemm.com',
      password: 'password',
    })
  }


  return (
    <div className="mx-8 my-8">
      Login Page
      <Button
        onClick={onLogin}>
        {signInUser.isPending ? 'Loading...' : 'Login'}
      </Button>
    </div>
  )
}
