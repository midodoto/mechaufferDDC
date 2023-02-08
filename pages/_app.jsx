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

const authRequired = ['/dashboard']

export function App({ Component, pageProps }) {
    const router = useRouter()

    return (<>
            <GlobalStyle />
              <ThemeProvider theme={appTheme}>
                  <Layout>
                      <Provider store={store}>
                          <PersistGate loading={null} persistor={persistor}>

                          <AuthContextProvider>
                          {authRequired.includes(router.pathname) ? (
                                  <ProtectedRoute>
                                      <Component {...pageProps} />
                                  </ProtectedRoute>
                          ) : (
                              <Component {...pageProps} />
                          )}
                      </AuthContextProvider>
                          </PersistGate>
                      </Provider>
                  </Layout>
              </ThemeProvider>
          </>)
}

export default wrapper.withRedux(App);
