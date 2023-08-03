import {AppContext} from "@/context/AppProvider";
import {useContext} from "react";

export default function useApp () {
  return useContext(AppContext)
}

