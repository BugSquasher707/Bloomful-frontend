import { authUser } from "api/endpoints/auth"
import { statusApi } from "api/endpoints/status"
import { createCtx } from "contexts/Context"
import { authRefresh } from "ellingsenx/api/auth"
import { walletGet } from "ellingsenx/api/wallet"
import { EgxWalletInterface } from "ellingsenx/libs/interfaces"
import { sampleUser } from "libs/data/user"
import { OverlayType } from "libs/enums"
import { UserInterface } from "libs/interfaces"
import React, { createContext, useEffect, useState } from "react"
import { useCookies } from "react-cookie"

type PropsContextType = {
  authenticated: boolean
  loading: boolean
  overlay: OverlayType | undefined
  path: string
  route: boolean
  token: any
  tokenRefresh: any
  user: UserInterface
  wallet: EgxWalletInterface | undefined
  setLoading: any
  setOverlay: any
  setPath: any
  setToken: any
  setTokenRefresh: any
  setUser: any
  onReset: any
}

export const [useProps, CtxProvider] = createCtx<PropsContextType>()

export const PropsContext = createContext<PropsContextType | undefined>(undefined)

export const PropsProvider = ({ children }: { children: React.ReactNode }) => {
  const [cookies, setCookie] = useCookies(["token"])

  const [authenticated, setAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const [overlay, setOverlay] = useState<OverlayType>()
  const [path, setPath] = useState(window.location.pathname)
  const [route] = useState(parseInt(process.env.REACT_APP_ADMIN ?? "") ? true : false)
  const [token, setToken] = useState<string>()
  const [tokenRefresh, setTokenRefresh] = useState<string>(cookies.token)
  const [user, setUser] = useState<UserInterface>(sampleUser)
  const [wallet, setWallet] = useState<EgxWalletInterface>()

  useEffect(() => {
    if (loading) {
      onLoad()
    }
  }, [loading])

  useEffect(() => {
    setAuthenticated(token && user ? true : false)
  }, [token, user])

  useEffect(() => {
    if (tokenRefresh) {
      setCookie("token", tokenRefresh, { path: "/" })
    }

    if (!authenticated) {
      onLoad()
    }
  }, [authenticated, tokenRefresh])

  const onLoad = async () => {
    const result = await statusApi()

    if (!result) {
      setOverlay(OverlayType.Server)
    }

    if (tokenRefresh) {
      const resultRefresh = await authRefresh(tokenRefresh)

      if (resultRefresh) {
        const newUser = resultRefresh.data.user

        if (!newUser || !newUser.roles || !newUser.roles.bloomfulx || !newUser.roles.bloomfulx.includes("therapist")) {
          setOverlay(OverlayType.Unauthorized)
          setLoading(false)

          return
        }

        if (newUser && newUser.id) {
          const resultUser = await authUser(resultRefresh.data.accessToken, newUser.id)

          if (resultUser) {
            setUser({ ...resultUser.data, ...newUser })
          } else {
            setUser(newUser)
          }
        } else {
          setUser(newUser)
        }

        setToken(resultRefresh.data.accessToken)
        setTokenRefresh(resultRefresh.data.refreshToken)

        await onWallet(resultRefresh.data.accessToken)
      } else {
        onReset()
      }
    } else {
      onReset()
    }

    setLoading(false)
  }

  const onWallet = async (access: string) => {
    const resultWallet = await walletGet(access)

    if (resultWallet) {
      setWallet(resultWallet.data)
    }
  }

  const onReset = () => {
    setUser(sampleUser)

    setToken("")
    setTokenRefresh("")

    setAuthenticated(false)
  }

  return (
    <>
      <CtxProvider
        value={{
          authenticated,
          loading,
          overlay,
          path,
          route,
          token,
          tokenRefresh,
          user,
          wallet,
          setLoading,
          setOverlay,
          setPath,
          setToken,
          setTokenRefresh,
          setUser,
          onReset
        }}
      >
        {children}
      </CtxProvider>
    </>
  )
}

export default PropsProvider
