import type {IComment} from "../../models/IComment.ts";
import {
  createAsyncThunk,
  createSlice,
  type PayloadAction
} from "@reduxjs/toolkit";
import {getAll} from "../../services/api.service.ts";

type CommentSliceType = {
  comments: IComment[]
}

const initCommentSliceState: CommentSliceType = {comments:[]};

const loadComments = createAsyncThunk('loadComments', async (_, thunkAPI) => {
  try{
    const comments = await getAll<IComment[]>('/comments')
    return thunkAPI.fulfillWithValue(comments)
  }
  catch (e) {
    console.log(e)
    return thunkAPI.rejectWithValue('Comments not found')
  }
})

export const commentSlice = createSlice({
  name: 'commentSlice',
  initialState: initCommentSliceState,
  reducers: {},
  extraReducers: builder => builder
    .addCase(loadComments.fulfilled, (state, action:PayloadAction<IComment[]>) => {
      state.comments = action.payload
    })
});

export const commentsActions = {...commentSlice.actions, loadComments}