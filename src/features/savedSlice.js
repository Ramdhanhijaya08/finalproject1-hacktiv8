import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	articles: [],
};

export const savedSlice = createSlice({
	name: 'saved',
	initialState,
	reducers: {
		savedArticle: (state, action) => {
			const findArticle = state.articles.find(article => article.title === action.payload.title);
			if (findArticle) {
				state.articles = state.articles.filter(article => article.title !== action.payload.title);
			} else {
				state.articles = [action.payload, ...state.articles];
			}
		},
	},
});

export const { savedArticle } = savedSlice.actions;

export default savedSlice.reducer;
