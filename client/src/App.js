// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {ApolloProvider, ApolloClient, InMemoryCache} from "@apollo/client";


import Calendar from "./pages/Cal";

//components
import Landing from "./components/Landing";


//pages
import Home from './pages/home';

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});


function App() {

  return (
    <ApolloProvider client={client}>
    <Router>
      <Routes>
        <Route 
        path="/" 
        element={<Landing />} 
        />
        <Route 
        path="/home"
        element={<Home />}
        />
      </Routes>
    </Router>
    </ApolloProvider>
    // <Landing />
  );
}

export default App;
