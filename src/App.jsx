import { useSelector } from "react-redux";
import Account from "./components/account";

function App() {
  const amount = useSelector((state) => state.account.amount);
  return (
    <>
      <h2>Account Balance : $ {amount}</h2>
      <Account />
    </>
  );
}

export default App;
