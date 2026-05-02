import React from "react";
import { paintingData } from "./data/painting";
import CategoryTree from "./components/CategoryTree";
import { useGameState } from "./hooks/useGameState";
import { GameElement } from "./types";
// import './styles/App.css';

const App: React.FC = () => {
    const allElementsIds: {id: string}[] = []
    const elementMap = new Map<string, GameElement>();

    const collectElements = (cats: typeof paintingData.categories) => {
        cats.forEach((cat) => {
            cat.elements?.forEach((el) => {
                allElementsIds.push({id: el.id});
                elementMap.set(el.id, el as GameElement);
            });
            if (cat.subcategories) collectElements(cat.subcategories);
        });
    };
    collectElements(paintingData.categories);

    const { state: elementStates, dispatch } = useGameState(allElementsIds);

    const handleElementClick = (id: string) => {
        if(!elementStates[id].solved) {
            dispatch({type: 'SOLVE_ELEMENT', id});
        }
    }

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
                <CategoryTree 
                categories={paintingData.categories} 
                elementStates={elementStates}
                onElementClick={handleElementClick}
                />
            </div>
        </div>
    )
}

export default App;

