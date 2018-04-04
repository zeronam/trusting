import * as CreateActionType from './constants';


const NewsStore = (state = {}, action) => {
    switch (action.type) {
        case CreateActionType.GET_NEWS_SUCCESS:
            return {
                data: action.data,
            };
        default:
            return state;
    }
};

export default NewsStore;