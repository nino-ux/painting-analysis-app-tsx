import { act, useReducer } from "react";
import { ElementRuntime } from "../types";

type GameState = Record<string, ElementRuntime>;

type GameAction = 
| {type: 'SOLVE_ELEMENT'; id: string}
| {type: 'REVEAL_CLUE'; id: string}
| {type: 'SET_STEP'; id: string; step: number};

function gameReducer(state: GameState, action: GameAction): GameState {
    switch (action.type) {
    case 'SOLVE_ELEMENT':
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          solved: true,
        },
      };
    case 'REVEAL_CLUE':
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          clueRevealed: true,
        },
      };
    case 'SET_STEP':
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          currentStep: action.step,
        },
      };
    default:
      return state;
  }
}

export function useGameState(elements: {id:string}[]) {
    const initialState = elements.reduce((acc, el) => {
        acc[el.id] = {solved: false, clueRevealed: false, currentStep:0 };
        return acc;
    }, {} as GameState);

    const [state, dispatch] = useReducer(gameReducer, initialState);
    // console.log(initialState);

    return {state, dispatch};
}