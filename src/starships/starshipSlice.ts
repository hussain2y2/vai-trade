import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface StarshipState {
  starships: any,
  fleets: any,
  detail: object,
}

const initialState: StarshipState = {
  starships: [],
  fleets: [],
  detail: {},
}

export const starshipSlice = createSlice({
  name: 'starship',
  initialState,
  reducers: {
    setStarships: (state, {payload}: PayloadAction<any>) => {
      state.starships = payload
    },
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
    removeFleet: (state, {payload}: PayloadAction<any>) => {
      state.fleets = state.fleets.filter((fleet: any) => fleet.url !== payload.url)
    },
    selectDetail: (state, {payload}: PayloadAction<any>) => {
      state.detail = payload;
    }
  }
})

export const {actions: {setStarships, addFleet, updateFleet, saveFleets, removeFleet, selectDetail}} = starshipSlice

const starshipReducer = starshipSlice.reducer

export default starshipReducer