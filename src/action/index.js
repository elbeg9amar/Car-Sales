export const ADD_FEATURE = "ADD_FEATURE"
export const EDIT_FEATURE = "EDIT_FEATURE"

export const addFeature = (feature) => {
    return {
        type:ADD_FEATURE,
        payload:feature
    }
}

export const editFeature = (feature) => {
    return {
        type:EDIT_FEATURE,
        payload:feature
    }
}
