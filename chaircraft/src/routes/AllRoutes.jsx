import {Routes, Route } from 'react-router-dom';
import {ChairDescription} from '../components/ChairDescription';
import {PartsSelection} from '../components/PartsSelection';
import { Assembly } from '../components/Assembly';
import { FinalProduct } from '../components/FinalProduct';

const AllRoutes =()=> {
  return (
    <>
      <Routes>
        <Route path="/" element={<ChairDescription/>} />
        <Route path="/parts-selection" element={<PartsSelection />} />
        <Route path="/assemble" element={<Assembly/>} />
        <Route path="/final-product" element={<FinalProduct/>} />
      </Routes>
    </>
  );
}

export {AllRoutes};
