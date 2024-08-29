"use client"
// components/DeleteModal.tsx
import useModalStore from '@/stores/useModalStore';
import {useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const DeleteModal = () => {
  const { isDeleteModalOpen, closeDeleteModal, handleConfirm, urlToDelete} = useModalStore();

function handleDelete(){
    handleConfirm(urlToDelete)
  }
  if (!isDeleteModalOpen) return null;


  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50" onClick={closeDeleteModal}></div>
      <div className="bg-white p-6 rounded-lg shadow-lg z-10">
        <h2 className="text-xl font-semibold mb-4 text-slate-900">Are you sure?</h2>
        <p className="mb-4 text-slate-400">This action cannot be undone.</p>
        <div className="flex justify-end space-x-4">
          <button 
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={handleDelete}
          >
            Delete
          </button>
          <button 
            className="bg-gray-300 px-4 py-2 rounded"
            onClick={closeDeleteModal}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;

