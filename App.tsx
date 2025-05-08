import Home from '~/Home';

import './global.css';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '~/components/Header';

export default function App() {
  return (
    <>
    <Header />
      <SafeAreaView className="m-6 flex-1">
        <Home />
      </SafeAreaView>
    </>
  );
}
