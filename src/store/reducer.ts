export type AppStateType = {
    minvalue: number
    maxvalue: number
    count: number
    error: boolean
    onTuning: boolean
}

type IncrementCountAT = ReturnType<typeof incrementCountAC>
type ResetCountAT = ReturnType<typeof resetCountAC>
type SetMinValueAT = ReturnType<typeof setMinValueAC>
type SetMaxValueAT = ReturnType<typeof setMaxValueAC>
type SetOnTuningAT = ReturnType<typeof setOnTuning>

type ActionsType = IncrementCountAT
    | ResetCountAT
    | SetMinValueAT
    | SetMaxValueAT
    | SetOnTuningAT

const reducer = (state: AppStateType, action: ActionsType) => {
    switch (action.type) {
        case "INCREMENT-COUNT":
            return {
                ...state,
                count: state.count + 1
            }
        case "RESET-COUNT":
            return {
                ...state,
                count: state.minvalue
            }
        case "SET-MIN-VALUE":
            return {
                ...state,
                minvalue: action.newMinValue
            }
        case "SET-MAX-VALUE":
            return {
                ...state,
                maxvalue: action.newMaxValue
            }
        case "SET-ON-TUNING":
            return {
                ...state,
                onTuning: action.onTuning
            }
        default:
            return state
    }
}

export default reducer

export const incrementCountAC = () => ({
    type: 'INCREMENT-COUNT'
}) as const

export const resetCountAC = () => ({
    type: 'RESET-COUNT'
}) as const

export const setMinValueAC = (newMinValue: number) => ({
    type: 'SET-MIN-VALUE',
    newMinValue
}) as const

export const setMaxValueAC = (newMaxValue: number) => ({
    type: 'SET-MAX-VALUE',
    newMaxValue
}) as const

export const setOnTuning = (onTuning: boolean) => ({
    type: 'SET-ON-TUNING',
    onTuning
}) as const