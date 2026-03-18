import React, { use, useEffect } from 'react'
import { ChevronDown, X } from 'lucide-react'
import Dialog from '@mui/material/Dialog';
import Search from './Search';
import { useState } from 'react';
import axios from 'axios';


function Location() {

  const [openDialogBox, setOpenDialogBox] = useState(false);

  const [ countryList, setCountryList] = useState([]);

  const [filteredList, setFilteredList] = useState([]);

  const [ selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/")
  }, [])

  const getCountry = async (url) => {
    
      const response = await axios.get(url).then((res) => {
        setCountryList(res.data.data);
      })
    }

  const filterList = (e) => {
    const searchItem = e.target.value.toLowerCase();

    const filtered = countryList.filter((item) => {
      return item.country.toLowerCase().includes(searchItem);
    })
    setFilteredList(filtered);
  }

  useEffect(() => {
    setFilteredList(countryList);
  }, [countryList]) 
  return (
    <>
    <div className='flex border border-gray-300 px-3 py-1 bg-white text-gray-800 rounded cursor-pointer' 
    onClick={() => setOpenDialogBox(true)}
    >
        <div className='flex flex-col'>
        <span>Your Location</span>
        <span>{selectedCountry !== "" ? selectedCountry : "Select a country"}</span>
        </div>
        <ChevronDown />
    </div>

        <Dialog className='relative location cursor-pointer' open={openDialogBox} onClose={() => setOpenDialogBox(false)}>
          <h2 className='mb-3 mt-2 text-2xl'>Choose your Delivery Account</h2>
          <Search type={"text"} placeholder={"Search locations..."} onChange={filterList}/>

          <ol className='max-h-60 overflow-y-scroll mt-3 cursor-pointer'>
            {
            filteredList?.map((item, index) => (
              <li key={index} className='p-2 hover:bg-gray-100 rounded'
              onClick={() => {
                setSelectedCountry(item.country) ;
                setOpenDialogBox(false)
              }
              }
              >{item.country}</li>
            ))
            }
          </ol>

          <X className="absolute top-3 right-3 cursor-pointer" onClick={() => setOpenDialogBox(false)} />
    </Dialog>
    
      </>
  )
}

export default Location
