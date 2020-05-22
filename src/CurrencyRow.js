import React from 'react'

export default function CurrencyRow(props) {

    const {
        CurrencyOptions,
        selectedCurrency,
        onChangeCurrency,
        onChangeAmount,
        amount,
        className
    } = props

    return (
        <div className={props.className}>
            <select value={selectedCurrency} onChange={onChangeCurrency}>
                {CurrencyOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
            <input className="input" type="number" value={amount} onChange={onChangeAmount} />            
        </div>
    )
}
