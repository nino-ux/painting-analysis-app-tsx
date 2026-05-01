import React from "react";
import { paintingData } from "./data/painting";
import CategoryTree from "./components/CategoryTree";
// import './styles/App.css';

const App: React.FC = () => {
    return(
        <div className="App">
            <div className="painting-container">
                <img
                    src={paintingData.imageUrl}
                    alt={paintingData.title}
                    className="painting"
                />
                <h2>{paintingData.title}</h2>
                <p>
                    {paintingData.artist}, {paintingData.year}
                </p>
            </div>
            <div className="sidebar">
                <h3>Elements</h3>
                <CategoryTree categories={paintingData.categories} />
            </div>
        </div>
    )
}

export default App;

