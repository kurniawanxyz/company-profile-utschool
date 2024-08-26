import dynamic from 'next/dynamic';

export const useDynamic = (path: FileSystemGetFileOptions) => dynamic(() => import(`${path}`));
