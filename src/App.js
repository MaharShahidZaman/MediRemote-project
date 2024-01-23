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
import { PatientData } from './components/PatientData';
import { Practice } from './Practice';

function App() {
  return (
    <div>
      {/* <Practice /> */}
      <BrowserRouter>
      <SideBar />
      <Routes>
        <Route path='/loginform' element={<Loginform />} />
        <Route path='/signUpForm' element={<SignUpForm />} />
        <Route path='/' element={<Home />} />
        <Route path='/user/:id' element={<UserScreen />} /> 
        <Route path='/datagrid' element={<DataGridTable />} />
        <Route path='/patientinfo' element={<PatientInfo />} />
        <Route path='/patientdata' element={<PatientData />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
