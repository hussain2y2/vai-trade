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
      state.fleets.push(payload)
    },
    updateFleet: (state, {payload}: PayloadAction<any>) => {
      state.fleets = state.fleets.map((task: any) => {
        if (task.key === payload.id) {
          task.title = payload.title
        }
        return task
      })
    },
    selectDetail: (state, {payload}: PayloadAction<any>) => {
      state.detail = payload
    }
  }
})

export const {actions: {addFleet, updateFleet, selectDetail}} = starshipSlice

const starshipReducer = starshipSlice.reducer

export default starshipReducer