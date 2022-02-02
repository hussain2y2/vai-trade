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
      state.fleets = state.fleets.map((fleet: any) => {
        // comparison with url as is the unique value
        if (fleet.url === payload.url) {
          fleet.passengers = payload.passengers;
        }
        return fleet;
      })
      state.detail = {...state.detail, passengers: payload.passengers};
      console.log(state.detail)
    },
    selectDetail: (state, {payload}: PayloadAction<any>) => {
      state.detail = payload;
    }
  }
})

export const {actions: {addFleet, updateFleet, selectDetail}} = starshipSlice

const starshipReducer = starshipSlice.reducer

export default starshipReducer