import { AnyAction } from 'redux';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';

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

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

const makeStore = () =>
  configureStore({
    reducer,
  });

export const wrapper = createWrapper(makeStore, { debug: true });
