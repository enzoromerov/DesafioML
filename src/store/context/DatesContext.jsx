import React, { useState } from 'react'
import { addDays } from 'date-fns';

let DatesContext = React.createContext()
let { Provider, Consumer } = DatesContext


function DatesProvider({ children }) {
    // MANEJO DE FECHAS
    const [dates, setDates] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection'
        }
    ])

    const dateFormat = (day) => {
        const d = day.getDate() < 10 ? '0' + day.getDate() : day.getDate();
        const m = day.getMonth() < 9 ? '0' + (day.getMonth() + 1) : day.getMonth() + 1;
        return d + '-' + m + '-' + day.getFullYear();
    }
    
    // PARA MOSTRAR O NO ESCRITORIOS 
    const [ workspaceBtn, setWorkspaceBtn ] = useState("none");

    return (
        <Provider value={{
            dates,
            workspaceBtn,
            dateFormat,
            setDates,
            setWorkspaceBtn
            }}>
            {children}
        </Provider>
    )
}

export { DatesProvider, Consumer as DatesConsumer, DatesContext }