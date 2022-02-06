const initialState = {
  searchInputValue: "",
  isToggle: false,
  parentId: null,
  isSearchShow: true,
  id: null,
  currentData: [],
  isShowTag: true,
  isShowQuestion: false,
  isWizardChildren: false,
  isLoading: true,
  classNamePopup: "popup",
  user: null,
  currentCity: {
    city: "Казань",
    lat: 55.83043,
    lng: 49.06608,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_INPUT_VALUE":
      return {
        ...state,
        searchInputValue: action.payload,
      };
    case "SWITH_TOGGLE":
      return {
        ...state,
        isToggle: !state.isToggle,
      };
    case "CLEAR_ACTION":
      return {
        ...state,
        searchInputValue: "",
      };
    case "GET_PARENT_ID":
      return {
        ...state,
        parentId: action.payload,
      };
    case "SHOW_SEARCH":
      return {
        ...state,
        isSearchShow: action.payload,
      };
    case "GET_ID":
      return {
        ...state,
        id: action.payload,
      };
    case "CHANGE_DATA":
      return {
        ...state,
        currentData: action.payload,
      };
    case "IS_SHOW_TAG":
      return {
        ...state,
        isShowTag: action.payload,
      };
    case "IS_SHOW_QUESTION":
      return {
        ...state,
        isShowQuestion: action.payload,
      };
    case "IS_WIZARD_CHILDREN":
      return {
        ...state,
        isWizardChildren: action.payload,
      };
    case "IS_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "CHANGE_CLASS_NAME":
      return {
        ...state,
        classNamePopup: action.payload,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "LOG_AUT":
      return {
        ...state,
        user: null,
      };
    case "SET_CURRENT_CITY":
      return {
        ...state,
        currentCity: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
