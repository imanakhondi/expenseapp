import { Route, Routes } from "react-router-dom";
import "./App.css";
import ExpenseApp from "./components/ExpenseApp";
import Splashscreen from "./pages/Splashscreen";
import Onboarding from "./pages/Onboarding";
import Homepage from "./pages/Homepage";
import Profile from "./pages/Profile";
import AddExpense from "./pages/AddExpense";
import TransactionDetails from "./pages/TransactionDetails";
import Wallet from "./pages/Wallet";
import Chart from "./pages/Chart";
import MasterPage from "./pages/MasraerPage";

function App() {
  return (
    <div className="App">
      {/* <header>
        <h2>Expense Tracker</h2>
      </header> */}

      <Routes>
        <Route path="/" element={<Splashscreen />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/panel" element={<MasterPage />}>
          <Route path="wallet" element={<Wallet />} />
          <Route path="home" element={<Homepage />} />
          <Route path="chart" element={<Chart />} />
          <Route path="profile" element={<Profile />} />
          <Route
            path="transactionDetails/:id"
            element={<TransactionDetails />}
          />
          <Route path="addExpense" element={<AddExpense />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
