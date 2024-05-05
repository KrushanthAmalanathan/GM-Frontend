import React from "react";
import { Routes, Route } from "react-router-dom";

import MainHome from './pages/MainHome.jsx';
import INSTRUCTORS from './pages/INSTRUCTORS.jsx';

import RawiRequests from './pages/inventoryManager/RawiRequests.jsx';
import RawinRequests from './pages/inventoryManager/RawinRequests.jsx';
import RawioRequests from './pages/inventoryManager/RawioRequests.jsx';
import RawsRequests from './pages/supplementManager/RawsRequests.jsx';
import RawmRequests from './pages/productionManager/RawmRequests.jsx';
import CreatermRequests from './pages/productionManager/CreatermRequests.jsx';
import ViewrmRequests from './pages/productionManager/ViewrmRequests.jsx';
import UpdatermRequests from './pages/productionManager/UpdatermRequests.jsx';
import DeletermRequests from './pages/productionManager/DeletermRequests.jsx';

import CreateSupplements from './pages/Shop/CreateSupplements.jsx';
import DeleteSupplements from './pages/Shop/DeleteSupplements.jsx';
import RawsuRequests from './pages/Shop/RawsuRequests.jsx';
import UpdateSupplements from './pages/Shop/UpdateSupplements.jsx';
import ViewSupplements from './pages/Shop/ViewSupplements.jsx';

import StoreShoppingPage from './pages/Shop/StoreShoppingPage.jsx';
import InventoryHome from "./pages/InventoryHome.jsx";

/* Ashvika */
import RelHome from './pages/RelHome.jsx'
import RawfbRequests from './pages/CustomerServiseManager/RawfbRequests.jsx';
import CreatefbFitnesss from './pages/CustomerServiseManager/CreatefbFitnesss.jsx';
import ViewfbFitnesss from './pages/CustomerServiseManager/ViewfbFitnesss.jsx';
import UpdatefbFitnesss from './pages/CustomerServiseManager/UpdatefbFitnesss.jsx';
import DeletefbFitnesss from './pages/CustomerServiseManager/DeletefbFitnesss.jsx';
import CustomerfbFitness from './pages/CustomerServiseManager/CustomerfbFitness.jsx';




// aj
import RawmdRequests from './pages/MedicalServiceManager/RawmdRequests.jsx';
import CreatemdFitnesss from './pages/MedicalServiceManager/CreatemdFitnesss.jsx';
import ViewmdFitnesss from './pages/MedicalServiceManager/ViewmdFitnesss.jsx';
import UpdatemdFitnesss from './pages/MedicalServiceManager/UpdatemdFitnesss.jsx';
import DeletemdFitnesss from './pages/MedicalServiceManager/DeletemdFitnesss.jsx';
import UsermdFitnesss from './pages/MedicalServiceManager/UsermdFitnesss.jsx';


import Attendance from './pages/AttedanceManager/Attendance.jsx';
import CreateatFitnesss from './pages/AttedanceManager/CreateatFitnesss.jsx';
import RawatRequests from './pages/AttedanceManager/RawatRequests.jsx';
import DeleteatFitnesss from './pages/AttedanceManager/DeleteatFitnesss.jsx';


/* Harshi */
import RawptRequests from './pages/PersonalTrinerManager/RawptRequests.jsx';
import CreateptFitnesss from './pages/PersonalTrinerManager/CreateptFitnesss.jsx';
import ViewptFitnesss from './pages/PersonalTrinerManager/ViewptFitnesss.jsx';
import UpdateptFitnesss from './pages/PersonalTrinerManager/UpdateptFitnesss.jsx';
import DeleteptFitnesss from './pages/PersonalTrinerManager/DeleteptFitnesss.jsx';
import TrinerHome from "./pages/TrinerHome.jsx";

/* Titus */
import RawcsRequests from './pages/ClassManager/RawcsRequests.jsx';
import CreatecsFitnesss from './pages/ClassManager/CreatecsFitnesss.jsx';
import ViewcsFitnesss from './pages/ClassManager/ViewcsFitnesss.jsx';
import UpdatecsFitnesss from './pages/ClassManager/UpdatecsFitnesss.jsx';
import DeletecsFitnesss from './pages/ClassManager/DeletecsFitnesss.jsx';
import RawuserRequests from './pages/ClassManager/RawusercsFitness.jsx';
import ClassHome from './pages/ClassHome.jsx';
import ScheduleHome from './pages/ScheduleHome.jsx';





const App = () => {
  return (
    <Routes>

      <Route path='/MainHome' element={<MainHome />} />INSTRUCTORS
      <Route path='/INSTRUCTORS' element={<INSTRUCTORS />} />

      {/* Production Manager Routes */}
      <Route path='/rmRequests/create' element={<CreatermRequests />} />
      <Route path='/rmRequests/details/:id' element={<ViewrmRequests />} />
      <Route path='/rmRequests/edit/:id' element={<UpdatermRequests />} />
      <Route path='/rmRequests/delete/:id' element={<DeletermRequests />} />

      {/* Supplement Manager Routes */}
      <Route path='/RawsRequests' element={<RawsRequests />} />

      {/* Inventory Manager Routes */}
      <Route path='/RawiRequests' element={<RawiRequests />} />
      <Route path='/RawinRequests' element={<RawinRequests />} />
      <Route path='/RawioRequests' element={<RawioRequests />} />

      {/* Common Routes */}
      <Route path='/RawmRequests' element={<RawmRequests />} />
      <Route path='/rmHome' element={<InventoryHome />} />

      {/* Shop Routes */}
      <Route path='/smShops/create/:id' element={<CreateSupplements />} />
      <Route path='/smShops/details/:id' element={<ViewSupplements />} />
      <Route path='/smShops/edit/:id' element={<UpdateSupplements />} />
      <Route path='/smShops/delete/:id' element={<DeleteSupplements />} />
      <Route path='/RawsuRequests' element={<RawsuRequests />} />

      <Route path='/StoreShoppingPage' element={<StoreShoppingPage />} />
      <Route path='/InventoryHome' element={<InventoryHome />} />

      {/* Ashvika */}
      <Route path='/RawfbRequests' element={<RawfbRequests />} />
      <Route path='/fbfitnesss/create' element={<CreatefbFitnesss />} />
      <Route path='/fbfitnesss/details/:id' element={<ViewfbFitnesss />} />
      <Route path='/fbfitnesss/edit/:id' element={<UpdatefbFitnesss />} />
      <Route path='/fbfitnesss/delete/:id' element={<DeletefbFitnesss />} />
      <Route path='/RelationHome' element={<RelHome />} />
      <Route path='/Home/Feedback' element={<CustomerfbFitness />} />

      {/* Aj */}
      <Route path='/RawmdRequests' element={<RawmdRequests />} />
      <Route path='/mdfitnesss/create' element={<CreatemdFitnesss />} />
      <Route path='/mdfitnesss/details/:id' element={<ViewmdFitnesss />} />
      <Route path='/mdfitnesss/edit/:id' element={<UpdatemdFitnesss />} />
      <Route path='/mdfitnesss/delete/:id' element={<DeletemdFitnesss />} />
      <Route path='/UsermdFitnesss' element={<UsermdFitnesss />} />

      <Route path='/Attendance' element={<Attendance />} />
      <Route path='/RawatRequests' element={<RawatRequests />} />
      <Route path='/atfitnesss/create/:id' element={<CreateatFitnesss />} />
      <Route path='/atfitnesss/delete/:id' element={<DeleteatFitnesss />} />



      {/* Harshi */}
      <Route path='/RawptRequests' element={<RawptRequests />} />
      <Route path='/ptfitnesss/create' element={<CreateptFitnesss />} />
      <Route path='/ptfitnesss/details/:id' element={<ViewptFitnesss />} />
      <Route path='/ptfitnesss/edit/:id' element={<UpdateptFitnesss />} />
      <Route path='/ptfitnesss/delete/:id' element={<DeleteptFitnesss />} />
      <Route path='/TrinerHome' element={<TrinerHome />} />


      {/* Titus */}
      <Route path='/RawcsRequests' element={<RawcsRequests />} />
      <Route path='/csfitnesss/create' element={<CreatecsFitnesss />} />
      <Route path='/csfitnesss/details/:id' element={<ViewcsFitnesss />} />
      <Route path='/csfitnesss/edit/:id' element={<UpdatecsFitnesss />} />
      <Route path='/csfitnesss/delete/:id' element={<DeletecsFitnesss />} />
      <Route path='/csFitness/userdetails/:id' element={<RawuserRequests />} />
      <Route path='/csfitness/home' element={<ClassHome />} />
      <Route path='/csfitness/shome' element={<ScheduleHome />} />

    </Routes>
  );
};

export default App;
