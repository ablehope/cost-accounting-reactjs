import React, { useState } from "react";
import './CostForm.css'

export default function CostForm(props) {

    const [ name, setName ] = useState('')
    const [ amount, setAmount ] = useState('')
    const [ date, setDate ] = useState('')

    function nameChangeHandler(e) {
        setName(e.target.value)
    }

    function amountChangeHandler(e) {
        setAmount(e.target.value)
    }

    function dateChangeHandler(e) {
        setDate(e.target.value)
    }

    function onSubmitHandler(e) {
        props.onSaveCostDataHandler(name, amount, date)
        // console.log(name, amount, date)
        e.preventDefault()
        setName('')
        setAmount('')
        setDate('')
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div className="new-cost__controls">
                <div className="new-cost__control">
                    <label>Название</label>
                    <input type="text" onChange={nameChangeHandler} value={name} />
                </div>
                <div className="new-cost__control">
                    <label>Сумма</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={amount}/>
                </div>
                <div className="new-cost__control">
                    <label>Дата</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} value={date}/>
                </div>
                <div className="new-cost__actions">
                    <button type="submit">Добавить расход</button>
                    <button>Отмена</button>
                </div>
            </div>
        </form>
    )
}
