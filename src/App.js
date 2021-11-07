import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Banner from './Conponent/banner/Banner';
import Header from './Conponent/Header/Header';
import Footer from './Conponent/footer/Footer'
import WhyChoose from './Conponent/Why Choose /WhyChoose';
import TravelBlog from './Conponent/TravelBlog/TravelBlog';
import Services from './Conponent/Services/Services';
import Login from './Conponent/Login/Login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './Conponent/NotFound/NotFound';
import AuthProvider from './context/AuthProvider';
import Contact from './Conponent/Contact/Contact'
import ServiceDetail from './Conponent/ServiceDetail/ServiceDetail';
import AddService from './Conponent/AddService/AddService';
import PrivateRoute from './Conponent/PrivateRout/PrivateRoute';
import Order from './Conponent/Order/Order';
import ManageOrder from './Conponent/ManageOrder/ManageOrder';

function App() {
  return (
    <div className="App">
      {/* 
      
      <Login></Login>
       */}
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>


          <Switch>
            <Route exact path="/">
              <Banner></Banner>
              <TravelBlog></TravelBlog>
              <WhyChoose></WhyChoose>
              <Services></Services>
              <Footer></Footer>
            </Route>
            <Route exact path="/home">
              <Banner></Banner>
              <TravelBlog></TravelBlog>
              <WhyChoose></WhyChoose>
              <Services></Services>
              <Footer></Footer>
            </Route>
            <Route exact path="/services">
              <Banner></Banner>
              <Services></Services>
              <Footer></Footer>
            </Route>
            <PrivateRoute path="/service/:serviceId">
              <ServiceDetail></ServiceDetail>
              <Footer></Footer>
            </PrivateRoute>
            <Route path="/contact">
              <Contact></Contact>
              <Footer></Footer>
            </Route>
            <Route path="/login">
              <Login></Login>
              <Footer></Footer>
            </Route>
            <PrivateRoute path="/addservice">
              <AddService></AddService>
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute path="/myorder">
              <Order></Order>
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute path="/manageorders">
              <ManageOrder></ManageOrder>
              <Footer></Footer>
            </PrivateRoute>
            <Route exact path="*">
              <NotFound></NotFound>
              <Footer></Footer>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
