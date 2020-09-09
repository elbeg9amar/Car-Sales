const ADD_FEATURE = "ADD_FEATURE"
const EDIT_FEATURE = "EDIT_FEATURE"

export const addFeature = (id) => {
    return {
        type:ADD_FEATURE,
        payload:id
    }
}

export const editFeature = (id) => {
    return {
        type:EDIT_FEATURE,
        payload:id
    }
}
