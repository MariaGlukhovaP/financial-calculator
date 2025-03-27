import { CarLoanCalculator } from "./components/carLoanCalculator";
import { ConsumerLoanCalculator } from "./components/consumerLoanCalculator";
import { Layout } from "./components/layout/layout";
import { MortgageCalculator } from "./components/mortgageCalculator";

function App() {
  return (
    <Layout>
      <MortgageCalculator />
      <CarLoanCalculator />
      <ConsumerLoanCalculator />
    </Layout>
  );
}

export default App;
