import React from 'react'
import { CompanyListRow } from './companies-list-row'
//import './../styles/companies-list.css'

interface CompanyUI {
    name: string;
    ticker_symbol: string;
    exchange_symbol: string;
}

interface CompanyListUI {
    companies: CompanyUI[];
    loading: boolean;
    handleCompanyRemove: (name: string) => void;
}

export const CompanyList = (props: CompanyListUI) => {
    // show loading message
    if (props.loading) return <p>Company list table is loading...</p>
    return (
        <table className="table">
        <thead>
          <tr>
            

            <th className="table-head-item">Name</th>

            <th className="table-head-item">Ticker Symbol</th>

            <th className="table-head-item">Exchange Symbol</th>
            
          </tr>
          </thead>
        <tbody className="table-body">
            {props.companies.length > 0 ? (
                props.companies.map((company: CompanyUI, idx) => (
                    <CompanyListRow
                        key={company.name}
                        company={company}
                        position={idx+1}
                        handleCompanyRemove={props.handleCompanyRemove}
                        />
                ))
            ):(
                <tr className="table-row">
                    <td className="table-item" style={{ textAlign: 'center'}} colSpan={3}>
                        There are no companies to show </td>
                </tr>
            )}
        </tbody>
        </table>
    )
}