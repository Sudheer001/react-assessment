
import React, { useEffect, useState } from 'react'

const AccountContext = React.createContext([{}, () => {}])

const AccountProvider = ({ children }) => {
  const [loginState, setLoginState] = useState({ isLoggedIn: false });
  const [accountInfo, setAccountInfo] = useState({});

  useEffect(() => {
    if (loginState.isLoggedIn) {
      setAccountInfo({
        first_name: "Angela",
        last_name: "Davis",
        region: "sf"
      })
    }
  }, [loginState.isLoggedIn]);

  return (
    <AccountContext.Provider value={
      {
        state: loginState,
        setState: setLoginState,
        accountInfo: accountInfo
      }
    }>
      {children}
    </AccountContext.Provider>
  )
}

export { AccountContext, AccountProvider };
