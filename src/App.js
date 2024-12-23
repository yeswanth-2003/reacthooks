import logo from './logo.svg';
import './App.css';
import { Page1,Page2 } from './components/usenavigation'
import Form from './components/usestate';
import Time from './components/useeffect';
import Count from './components/usememo';
import Context from './components/usecontext';
import Ref from './components/useref';
import Dispatch from './components/usedispatch';
import ProductDetail from './components/singleproduct';
import { Provider } from 'react-redux';
import count from './components/redux';
import { BrowserRouter, Routes, Route, Router, useLocation } from 'react-router-dom';

function App() {
  return (

// USESTATE
      <Form/>

// USEEFFECT
    // <Time/>

// USEMEMO
    // <Count/>

// USECONTEXT
      //  <Context/>

// USEREF
    // <Ref/>

// USESELECTOR & USEDISPATCH 
    // <Provider store={count}>
    // <Dispatch/>
    // </Provider>

// useLocation
  //   <BrowserRouter>
  //     <Routes>
    
  //    <Route path="/" element={<Context />} />
  //    <Route path="/product/:Product" element={<ProductDetail />} />
  
  //  </Routes>
  //  </BrowserRouter>


// USENAVIGATE
    // <BrowserRouter>

    // <Routes>

    // <Route path="/" element={<Page1 />} />
    // <Route path="/page2" element={<Page2 />} />

    // </Routes>
    // </BrowserRouter>

  );
}

export default App;
