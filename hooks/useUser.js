import { useEffect, useState } from "react"
import { onAuthStateChanged } from "../firebase/client"
import { useRouter } from "next/router"
import {seteador} from "../pages/login"
import nookies from 'nookies'
import jwt_decode from "jwt-decode"
import { parseCookies  } from 'nookies'

export const USER_STATES = {
  NOT_LOGGED: null,
  NOT_KNOWN: undefined,
}

export default function useUser() {
  const [user, setUser] = useState(USER_STATES.NOT_KNOWN)
  const router = useRouter()

  
 
  useEffect(() => {
    user === USER_STATES.NOT_LOGGED && router.push("/login")
  }, [user])

  return user
}

