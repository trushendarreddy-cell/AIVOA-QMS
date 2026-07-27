import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  prompt: '',
  formData: {
    complaintSource: 'Pharmacy',
    customerName: '',
    productId: '',
    strength: '',
    batchNumber: '',
    affectedQuantity: '',
    manufacturingDate: '',
    expiryDate: '',
    issueCategory: 'Product Quality / Appearance',
    complaintDescription: '',
    urgencyLevel: 'Medium'
  },
  riskAssessment: null,
  completenessData: null,     // Feature 1: Completeness check state
  duplicateWarning: null,     // Feature 2: Duplicate detection state
  complaintsList: [],
  loading: false,
  saveStatus: ''
};

const complaintSlice = createSlice({
  name: 'complaints',
  initialState,
  reducers: {
    setPrompt: (state, action) => {
      state.prompt = action.payload;
    },
    setField: (state, action) => {
      const { name, value } = action.payload;
      state.formData[name] = value;
    },
    setExtractedData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    setRiskAssessment: (state, action) => {
      state.riskAssessment = action.payload;
    },
    setCompletenessData: (state, action) => {
      state.completenessData = action.payload;
    },
    setDuplicateWarning: (state, action) => {
      state.duplicateWarning = action.payload;
    },
    setComplaintsList: (state, action) => {
      state.complaintsList = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setSaveStatus: (state, action) => {
      state.saveStatus = action.payload;
    }
  }
});

export const { 
  setPrompt, 
  setField, 
  setExtractedData, 
  setRiskAssessment, 
  setCompletenessData,
  setDuplicateWarning,
  setComplaintsList, 
  setLoading, 
  setSaveStatus 
} = complaintSlice.actions;

export default complaintSlice.reducer;