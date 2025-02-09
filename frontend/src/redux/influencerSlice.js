import { createSlice } from '@reduxjs/toolkit';

const influencerSlice = createSlice({
    name: 'influencer',
    initialState: {
        influencers: [],
    },
    reducers: {
        setInfluencers(state, action) {
            state.influencers = action.payload;
        },
    },
});

export const { setInfluencers } = influencerSlice.actions;
export default influencerSlice.reducer;