import React from "react"
import { Category } from "../types"

interface CategoryTreeProps {
    categories: Category[],
}

const CategoryTree: React.FC<CategoryTreeProps> = ({categories}) => {
    return (
        <ul className="category-tree">
            {categories.map((cat) => (
                <li key={cat.id}>
                    <details open>
                        <summary>{cat.name}</summary>
                        {cat.elements && (
                            <ul className="element-list">
                                {cat.elements.map((el) => (
                                    <li key={el.id} className="element-item">
                                        <span className="dot">●</span> {el.name}
                                    </li>
                                )
                                )}
                            </ul>
                        )}
                        {cat.subcategories && <CategoryTree categories={cat.subcategories}/>}
                    </details>
                </li>
            ))}
        </ul>
    )
}

export default CategoryTree;