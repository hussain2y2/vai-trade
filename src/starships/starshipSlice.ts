import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface StarshipState {
  fleets: any,
  detail: object,
}

const initialState: StarshipState = {
  fleets: [],
  detail: {},
}

export const starshipSlice = createSlice({
  name: 'starship',
  initialState,
  reducers: {
    addFleet: (state, {payload}: PayloadAction<any>) => {
      state.fleets.push(payload);
    },
    updateFleet: (state, {payload}: PayloadAction<any>) => {
      state.detail = {...state.detail, passengers: payload.passengers};
    },
    saveFleets: (state, {payload}: PayloadAction<any>) => {
      state.fleets = state.fleets.map((fleet: any) => {
        // comparison with url as is the unique value
        if (fleet.url === payload.url) {
          fleet.passengers = payload.passengers;
        }
        return fleet;
      })
    },
    selectDetail: (state, {payload}: PayloadAction<any>) => {
      state.detail = payload;
    }
  }
})

export const {actions: {addFleet, updateFleet, saveFleets, selectDetail}} = starshipSlice

const starshipReducer = starshipSlice.reducer

export default starshipReducer