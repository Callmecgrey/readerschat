import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AuthProvider } from '../contexts/AuthContext';
import { ChatProvider } from '../contexts/ChatContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ChatProvider>
        <Component {...pageProps} />
      </ChatProvider>
    </AuthProvider>
  );
}

export default MyApp;
