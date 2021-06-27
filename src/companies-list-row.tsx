import React from 'react'

interface CompanyListRowUI {
    position: number;
    company: {
        name: string;
        ticker_symbol: string;
        exchange_symbol: string;
    }
    handleCompanyRemove: (name: string) => void;
}

// Create CompanyListRow component
export const CompanyListRow = (props: CompanyListRowUI) => (
    <tr className="table-row">
    <td className="table-item">
      {props.company.name}
    </td>

    <td className="table-item">
      {props.company.ticker_symbol}
    </td>

    <td className="table-item">
      {props.company.exchange_symbol}
    </td>
    </tr>
)