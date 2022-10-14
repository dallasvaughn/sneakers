import { createContext, Dispatch, ReactNode, useReducer } from 'react';

type Props = {
  children: ReactNode;
};

interface State {
  count: number;
}

interface Action {
  type: string;
  payload?: number;
}

const initialState = {
  count: 0,
};

const initialDispatch = () => {
  return;
};

export const CartContext = createContext<[State, Dispatch<Action>]>([
  initialState,
  initialDispatch,
]);

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD':
      return {
        count: state.count + (action.payload || 0),
      };
    case 'REMOVE':
      return { count: 0 };
  }
  return { count: state.count };
};

export const CartProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={[state, dispatch]}>
      {children}
    </CartContext.Provider>
  );
};
