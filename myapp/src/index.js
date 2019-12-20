import React from 'react';
import ReactDOM from 'react-dom';
import Home from './component/Home'

const App = () => {
    return(
        <div>
            <Home/>
            <h1>Hi to React</h1>
            <p>Executive Master of Public Administration with a concentration Data Science, Big Data  Machine Learning. Currently pursuing a Ph.D</p>
        </div>
        
    )
}

ReactDOM.render(<App/>,document.getElementById('root'));