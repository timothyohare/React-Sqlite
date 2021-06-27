// Import deps
import React, { useEffect, useState } from 'react'
import axios from 'axios'

// Import components
import { CompanyList } from './companies-list'
//import './../styles/company.css'

// Create Company component
export const CompanyRegister = () => {
    // Prepare states
    //const [name, setName] = useState('');
    //const [ticker_symbol, setTickerSymbol] = useState('');
    //const [exchange_symbol, setExchangeSymbol] = useState('');
    //companies: companyListUI ;
    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch all companies on initial render
  useEffect(() => {
    fetchCompanies()
  }, [])

    // Fetch all companies 
    const fetchCompanies = async () => {
        // Send GET request to 'companies/all' endpoint
        axios
        .get('http://localhost:4001/companies/all')
        .then(response => {
            setCompanies(response.data)
            setLoading(false)
        })
        // eslint-disable-next-line no-template-curly-in-string
        .catch(error => console.error('There was an error retrieving the companies: ${error}'))
    }

    /* reset all of the input fields
    const handleInputsReset = () => {
        setName('')
        setExchangeSymbol('')
        setTickerSymbol('')
    }*/

    const handleCompanyRemove = (name: string) => {}

    return (
        <div className="company-list-wrapper">
        {/* Render company list component */}
      <CompanyList companies={companies} loading={loading} handleCompanyRemove={handleCompanyRemove}/>
      </div>
    )
}