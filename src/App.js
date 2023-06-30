import './App.css';
import React,{useState} from 'react';
import Sidebar from './components/Navbar';
import Addform from './components/Addform';
import EditUser from './components/EditUser';
import Showuser from './components/Showuser';
import { Route, Routes } from 'react-router-dom';
export const StudentContext = React.createContext();

function App() {
  let [students,setStudents] = useState([
    {
      name:"kavin",
      email:"kavin@gmail.com",
      mobile:"1231231231",
      sessionTime:"10am to 12pm",
      batch:"CSE"
    },
    {
      name:"Pradeep",
      email:"pradep@gmail.com",
      mobile:"9087654879",
      sessionTime:"10am to 12pm",
      batch:"ECE"
    },
    {
      name:"kumar",
      email:"kumar@gmail.com",
      mobile:"9032435654",
      sessionTime:"10am to 12pm",
      batch:"EEE"
    },
    {
      name:"ganesh",
      email:"ganesh@gmail.com",
      mobile:"9092328754",
      sessionTime:"10am to 12pm",
      batch:"IT"
    },
  ])
  return (
    <>
    
     <Sidebar/>
     <StudentContext.Provider value={{students,setStudents}}>
     <Routes>
     <Route path='/showuser' element={<Showuser/>}/>
      <Route path='/adduser' element={<Addform/>}  />
      <Route path='/edituser/:id' element={<EditUser/>}/>
     </Routes>
     </StudentContext.Provider>
    </>
  );
}

export default App;
