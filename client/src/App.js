
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {ApolloProvider, ApolloClient, InMemoryCache} from "@apollo/client";

import Calendar from "./pages/Cal";

// components
import Landing from "./components/Landing"
import ProtectedRoute from "./components/ProtectedRoute";


//pages
import Home from './pages/home';
import Profile from './pages/profile'

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
        element={
          <ProtectedRoute>
        <Home /> 
        </ProtectedRoute>
        }
        />
        <Route 
        path="/profile"
        element= {
          // <ProtectedRoute>
          <Profile /> 
          // </ProtectedRoute>
        }
        /> 
      </Routes>
    </Router>
    </ApolloProvider>
  );
}

export default App;
