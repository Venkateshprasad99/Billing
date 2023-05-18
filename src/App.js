import * as React from "react";
import { ChakraProvider } from '@chakra-ui/react';
import {  BrowserRouter,Route, Routes } from 'react-router-dom';
import Layout from './Pages/layout';
import Parties from './Parties/Parties';
import PartiesForm from "./Parties/PartiesForm";
import ItemForm from "./Items/ItemForm";
import Sales from "./Sales/Sales";
import Invoice from "./Sales/Invoice";





import './App.css';

function App() {

    return (
        

        <ChakraProvider>
<BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                   
                    <Route index  element={<Parties />} />
                    <Route path='parties_form'element={<PartiesForm/>}/>
                    <Route path='items'element={<ItemForm/>}/>
                    <Route path='sales'element={<Sales/>}/>
                    <Route path='invoice'element={<Invoice/>}/>
                   
                   

                </Route>
            </Routes>
            </BrowserRouter>
        </ChakraProvider>

    )
}

export default App;
