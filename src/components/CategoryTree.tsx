import React from "react"
import { Category, GameElement, ElementRuntime } from "../types"
import DotIndicator from './DotIndicator'

interface CategoryTreeProps {
    categories: Category[],
    elementStates: Record<string, ElementRuntime>;
    onElementClick: (id: string) => void;
}

const CategoryTree: React.FC<CategoryTreeProps> = ({
    categories,
    elementStates,
    onElementClick,
}) => {

    const renderElement = (el:GameElement) => {
        const runtime = elementStates[el.id];
        return (
            <li
                key={el.id}
                className="element-item"
                onClick={() => onElementClick(el.id)}
            >
                <DotIndicator element={el} runtime={runtime} />
            </li>
        )
    }

    return (
        <ul className="category-tree">
            {categories.map((cat) => (
                <li key={cat.id}>
                    <details open>
                        <summary>{cat.name}</summary>
                        {cat.elements && (
                            <ul className="element-list">
                                {cat.elements.map((el) => (
                                    renderElement(el)
                                )
                                )}
                            </ul>
                        )}
                        {cat.subcategories && (<CategoryTree 
                            categories={cat.subcategories}
                            elementStates={elementStates}
                            onElementClick={onElementClick}   
                            />
                        )}
                    </details>
                </li>
            ))}
        </ul>
    )
}

export default CategoryTree;