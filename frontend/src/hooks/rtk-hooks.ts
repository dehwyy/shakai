import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { DispatchT, RootT } from "../store/store"

export const useTypedDispatch: () => DispatchT = useDispatch
export const useTypedSelector: TypedUseSelectorHook<RootT> = useSelector
