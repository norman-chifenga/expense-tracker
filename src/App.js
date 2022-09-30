import './style/App.css';
import {Header} from './components/Header'
import {Reports} from "./components/Reports"
import {TransactionHistory} from "./components/TransactionHistory"
import { Transactions } from './components/Transactions';
import {Provider} from "react-redux"
import {store} from "./State/store"

function App() {
  return (
    <Provider store={store}>
      <div className="app">
      <Header appName="EXPENSE TRACKER"/>
      <Reports />
      <Transactions />
      <TransactionHistory />
    </div>
  </Provider>
  );
}

export default App;
