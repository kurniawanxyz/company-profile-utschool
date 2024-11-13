import { create } from "zustand";

type UseCategoryId = {
    categoryId: string,
    setCategoryId: (state: string) => void 
}
export const useCategoryId = create<UseCategoryId>((set)=>({
    categoryId: "",
    setCategoryId: (state) =>{
        set({
            categoryId: state
        })
    }
}))