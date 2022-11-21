import React from "react";
import Dashboard from "./components/Dashboard";
import './App.css'

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<Home />} />
    //       <Route path="feedback" element={<Feedback />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    <div>
      <Dashboard />

    </div>
  );
}

export default App
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);