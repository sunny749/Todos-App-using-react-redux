import React from "react";
import * as ReactDOM from "react-dom/client";
import {Provider} from 'react-redux'
import store from './redux/store'
import ConnectedApp from './app'


export default function App(){
    return (
        <Provider store={store}>
            <ConnectedApp/>
        </Provider>
    )
}
const container=document.getElementById('root')
ReactDOM.createRoot(container).render(<App/>)