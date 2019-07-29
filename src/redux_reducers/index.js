import { combineReducers } from 'redux';
import { market_processed_table_keys } from '../constants';


const coinsReducer = (state=[], action) => {
    const { type, payload } = action;

    switch(type) {
        case 'GET_COINS':
            return payload
        default:
            return state
    }
}



const compileMarketData = (marketData) => {

    let data = {}

    market_processed_table_keys.map(field => {
        let entries = Object.entries(marketData[field])
        for (let i = 0; i < entries.length; i ++) {
            let key = entries[i][0]
            let value = entries[i][1]
            if (Object.keys(data).includes(key)){
                data[key] = { ...data[key], [field]: value, currency: key }
            } else {
                data[key] = { [field]: value, currency: key }
            }   
        }
    })

    return Object.values(data)

} 

const coinDetailsReducer = (state = {}, action) => {
    const { type, payload } = action;
    
    switch(type) {
        case 'GET_COIN_DETAILS':
            const market_data_processed = compileMarketData(payload.market_data)
            return {...payload, market_data_processed}
        default:
            return state
    }

}

const globalReducer = (state={}, action) => {
    const { type, payload } = action;

    switch(type) {
        case 'GET_GLOBAL':
            return payload.data
        default:
            return state
    }
}

const exchangesReducer = (state=[], action) => {
    const { type, payload } = action;

    switch(type) {
        case 'GET_EXCHANGES':
            return payload
        default:
            return state
    }
}

const exchangeRatesReducer = (state=[], action) => {
    const { type, payload } = action;

    switch(type) {
        case 'GET_EXCHANGE_RATES':
            let rates = Object.values(payload.rates)
            return rates
        default:
            return state
    }
}


const eventReducer = (state=[], action) => {
    const { type, payload } = action;
    
    switch(type) {
        case 'GET_EVENTS':
            return payload.data
        default:
            return state
    }
}

const statusUpdatesReducer = (state=[], action) => {
    const { type, payload } = action;

    switch(type) {
        case 'GET_STATUS_UPDATES':
            console.log(payload)
            return payload.status_updates
        default: 
            return state
    }
}

const headerMenuItemReducer = (state='home', action) => {
    const { type, payload } = action;
    
    switch(type) {
        case 'SET_HEADER_MENU_ITEM':
            return payload.item; 
        default:
            return state;
    }
}

export const rootReducer = combineReducers({
    events: eventReducer,
    status_updates: statusUpdatesReducer,
    global: globalReducer,
    exchanges: exchangesReducer,
    exchange_rates: exchangeRatesReducer,
    coins: coinsReducer,
    coin_details: coinDetailsReducer,
    header_selected: headerMenuItemReducer
})