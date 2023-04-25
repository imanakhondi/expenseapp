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

function App() {
  return (
    <div className="App">
      {/* <header>
        <h2>Expense Tracker</h2>
      </header> */}

      <Routes>
        <Route path="/" element={<Splashscreen />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/addExpense" element={<AddExpense />} />
        <Route path="/transactionDetails/:id" element={<TransactionDetails />} />
        <Route path="/wallet" element={<Wallet />} />
      </Routes>
    </div>
  );
}

export default App;
