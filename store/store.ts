import { createStore, AnyAction } from 'redux';
import { MakeStore, createWrapper, Context, HYDRATE } from 'next-redux-wrapper';

export const SET_SELECTED_NAV = 'SET_SELECTED_NAV';

export interface IState {
  selectedNav: string;
}

const defaultState: IState = { selectedNav: 'highlights' };

const reducer = (state: IState = defaultState, action: AnyAction) => {
  switch (action.type) {
    // Each time when pages that have getStaticProps or getServerSideProps are opened by user the HYDRATE action will be dispatched.
    case HYDRATE:
      return { ...state, ...action.payload };
    case SET_SELECTED_NAV:
      return { ...state, selectedNav: action.payload };
    default:
      return state;
  }
};

const makeStore: MakeStore<IState> = (context: Context) => createStore(reducer);

export const wrapper = createWrapper<IState>(makeStore, { debug: true });
