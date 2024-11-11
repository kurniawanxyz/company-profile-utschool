import { create } from "zustand";

interface UseNavbarStore 
{
    isHover: boolean
    hoveredBar: string|null
    setHover: (data: boolean, hoveredBar: string|null) => void
}

export const useNavbarStore = create<UseNavbarStore>((set)=>({
    isHover: false, 
    hoveredBar: null,
    setHover: (data: boolean, hoveredBar = null) =>{
        set({
            isHover: data,
            hoveredBar: hoveredBar
        })
    }
}))