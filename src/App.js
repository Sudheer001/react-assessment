import './App.css';
import Assessments from './components/Assessments/Assessments'
import {AccountProvider} from './context/account.context'

function App() {
  return (
    <div className="App">
      <AccountProvider>
        <Assessments />
      </AccountProvider>
    </div>
  );
}

export default App;
