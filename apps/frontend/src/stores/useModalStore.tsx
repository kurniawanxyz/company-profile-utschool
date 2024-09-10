// store/useStore.ts
import { deleteDirectors } from '@/actions/DirectorAction';
import { handleUpdateToast } from '@/utils/handleUpdateToast';
import { toast } from 'react-toastify';
import {create} from 'zustand';

interface ModalState {
  isDeleteModalOpen: boolean;
  openDeleteModal: (url:string) => void;
  urlToDelete: string;
  isDeleted: boolean;
  closeDeleteModal: () => void;
  handleConfirm: (url:string) => void;
}

const useModalStore = create<ModalState>((set) => ({
  isDeleteModalOpen: false,
  urlToDelete: '',
  isDeleted: false,
  openDeleteModal: (url:string) => set({ isDeleteModalOpen: true, urlToDelete:url,isDeleted:false}),
  closeDeleteModal: () => set({ isDeleteModalOpen: false,isDeleted:false }),
  handleConfirm: async(url) => {

    const loading = toast.loading("loading...")
    const [status,msg,data] = await deleteDirectors(url)
    handleUpdateToast(loading,status,msg,data);
    set({ isDeleteModalOpen: false,isDeleted: true });
  },
}));

export default useModalStore;
