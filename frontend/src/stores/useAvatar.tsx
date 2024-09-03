import { create } from "zustand"

type useAvatartype = {
    avatar: string|undefined,
    setAvatar: (avatar:string|undefined)=> void 
}

export const useAvatar = create<useAvatartype>((set)=>({
    avatar: '/images/profile/1.jpg',
    setAvatar: (avatar)=>set({avatar})
}))