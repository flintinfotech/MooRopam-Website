import { ISnackPayload, snackInitialState } from '@/helpers'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export type CommonState = {
  snackState: ISnackPayload
}

const initialState: CommonState = {
  snackState: {...snackInitialState}
}

export type PayloadType = {
  name: "snackState",
  value: ISnackPayload
} 

export const commonSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {
    setReduxState: (state, action: PayloadAction<PayloadType>) => {
      //@ts-ignore
      state[action.payload.name] = action.payload.value
    }
  },
})

export const { setReduxState } = commonSlice.actions

export default commonSlice.reducer