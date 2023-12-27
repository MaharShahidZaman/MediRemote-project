import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { Loginform } from './components/loginForm';
import { SignUpForm } from './components/signUpForm';
import { Edit, UserScreen } from './components/UserScreen';
import { DataGridTable } from './components/DataGrid';
import  SideBar  from './components/SideBar';
import { PatientInfo } from './components/PatientInfo';
import { Charts } from './components/Chart';

function App() {
  return (
    <div>
      {/* <Charts /> */}
      <BrowserRouter>
      <SideBar />
      <Routes>
        <Route path='/loginform' element={<Loginform />} />
        <Route path='/signUpForm' element={<SignUpForm />} />
        <Route path='/' element={<Home />} />
        <Route path='/user/:id' element={<UserScreen />} /> 
        <Route path='/datagrid' element={<DataGridTable />} />
        <Route path='/patientinfo' element={<PatientInfo />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
