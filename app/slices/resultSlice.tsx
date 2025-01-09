import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { firestore } from '../firebase/config';
import { collection, getDocs, addDoc, deleteDoc, doc, query, where } from 'firebase/firestore';

interface Result {
    id: string;
    userId: string;
    co: string;
    xuong: string;
    khop: string;
    deKhang: string;
}

interface ResultState {
    data: Result[];
    loading: boolean;
    error: string | null;
}

const initialState: ResultState = {
    data: [],
    loading: false,
    error: null,
};

// Fetch all results
export const fetchResults = createAsyncThunk<Result[], void>(
    'results/fetchResults',
    async () => {
        const snapshot = await getDocs(collection(firestore, 'results'));
        return snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        })) as Result[];
    }
);

// Add a new result
export const addResult = createAsyncThunk<Result, Omit<Result, 'id' | 'createdAt'>>(
    'results/addResult',
    async (newResult) => {
        const resultWithDate = {
            ...newResult,
        };

        const docRef = await addDoc(collection(firestore, 'results'), resultWithDate);
        return { id: docRef.id, ...resultWithDate } as Result;
    }
);

export const deleteResultsByUserId = createAsyncThunk<void, string>(
    'results/deleteResultsByUserId',
    async (userId) => {
        const resultsQuery = query(collection(firestore, 'results'), where('userId', '==', userId));
        const snapshot = await getDocs(resultsQuery);

        // Xóa từng tài liệu
        const deletePromises = snapshot.docs.map(doc => deleteDoc(doc.ref));
        await Promise.all(deletePromises); // Chờ tất cả các tài liệu được xóa
    }
);

const resultsSlice = createSlice({
    name: 'results',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Fetch Results
            .addCase(fetchResults.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchResults.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchResults.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch results';
            })
            // Add Result
            .addCase(addResult.fulfilled, (state, action) => {
                state.data.push(action.payload);
            })
            .addCase(addResult.rejected, (state, action) => {
                state.error = action.error.message || 'Failed to add result';
            })
            // Delete Results by userId
            .addCase(deleteResultsByUserId.fulfilled, (state, action) => {
                // Xóa các kết quả khỏi state
                state.data = state.data.filter(result => result.userId !== action.meta.arg);
            })
            .addCase(deleteResultsByUserId.rejected, (state, action) => {
                state.error = action.error.message || 'Failed to delete results';
            });
    },
});

export default resultsSlice.reducer;
