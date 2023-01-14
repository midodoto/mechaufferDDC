import '../styles/globals.css'
import { ThemeProvider } from 'styled-components';
import { appTheme, GlobalStyle } from '../themes/theme';
import Layout from '../components/layout';
import { AuthContextProvider } from '../context/AuthContext'
import { useRouter } from 'next/router'
import ProtectedRoute from '../components/prodected-route'
import { Provider } from 'react-redux';
import { persistor, store, wrapper } from '../store/store';
import {PersistGate} from "redux-persist/integration/react";

const noAuthRequired = ['/', '/devis', '/login', '/signup']

export function App({ Component, pageProps }) {
    const router = useRouter()

    return (<>
            <GlobalStyle />
              <ThemeProvider theme={appTheme}>
                  <Layout>
                      <Provider store={store}>
                          <PersistGate loading={null} persistor={persistor}>

                          <AuthContextProvider>
                          {noAuthRequired.includes(router.pathname) ? (
                              <Component {...pageProps} />
                          ) : (
                              <ProtectedRoute>
                                  <Component {...pageProps} />
                              </ProtectedRoute>
                          )}
                      </AuthContextProvider>
                          </PersistGate>
                      </Provider>
                  </Layout>
              </ThemeProvider>
          </>)
}

export default wrapper.withRedux(App);
