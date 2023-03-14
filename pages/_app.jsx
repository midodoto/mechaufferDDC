import '../styles/globals.css'
import { ThemeProvider } from 'styled-components';
import { appTheme, GlobalStyle } from '../themes/theme';
import Layout from '../components/layout';
import { AuthContextProvider } from '../context/AuthContext'
import { useRouter } from 'next/router'
import ProtectedRouteUser from '../components/prodected-route/user.jsx'
import ProtectedRouteParrain from '../components/prodected-route/parrain.jsx'
import ProtectedRoutePartenaire from '../components/prodected-route/partenaire.jsx'
import { Provider } from 'react-redux';
import { persistor, store, wrapper } from '../store/store';
import {PersistGate} from "redux-persist/integration/react";

const authRequiredUser = ['/dashboard-user']
const authRequiredParrain = ['/dashboard']
const authRequiredPartenaire = ['/dashboard-partenaire']

export function App({ Component, pageProps }) {
    const router = useRouter()
    console.log("HEREEEEe", Component);

    return (<>
            <GlobalStyle />
              <ThemeProvider theme={appTheme}>
              <AuthContextProvider>
                  <Layout>
                      <Provider store={store}>
                          <PersistGate loading={null} persistor={persistor}>

                          {authRequiredUser.includes(router.pathname) ? (
                                  <ProtectedRouteUser>
                                      <Component {...pageProps} />
                                  </ProtectedRouteUser>
                          ) : authRequiredParrain.includes(router.pathname) ? (
                              <ProtectedRouteParrain>
                                  <Component {...pageProps} />
                              </ProtectedRouteParrain>
                          ) : authRequiredPartenaire.includes(router.pathname) ? (
                              <ProtectedRoutePartenaire>
                                  <Component {...pageProps} />
                              </ProtectedRoutePartenaire>
                          ) :
                              <Component {...pageProps} />
                          }
                          </PersistGate>
                      </Provider>
                  </Layout>
                  </AuthContextProvider>
              </ThemeProvider>
          </>)
}

export default wrapper.withRedux(App);
