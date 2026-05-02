import React from 'react';
import { GameElement, ElementRuntime } from "../types";

interface DotIndicatorProps {
    element: GameElement;
    runtime: ElementRuntime;
}

const DotIndicator: React.FC<DotIndicatorProps> = ({element, runtime}) => {
    if (runtime.solved) return <span className="dot solved">✅</span>
    if (element.type === 'clue' && runtime.clueRevealed)
            return <span className="dot clue-revealed">❗</span>
    if (element.type === 'clue') return <span className="dot has-clue">❓</span>
    return <span className="dot default">●</span>
};

export default DotIndicator;