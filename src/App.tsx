import Layout from "./components/layout/Layout";
import productsData from "./data/products.json";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div className="App">
      <Layout>
        <AppRouter />
      </Layout>
    </div>
  );
}

export default App;
