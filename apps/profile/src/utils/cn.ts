// utils/cn.ts
import clsx from 'clsx';
import classNames from 'classnames';

// Fungsi gabungan `cn` untuk menggabungkan classnames dan clsx
export function cn(...inputs: any[]) {
  return classNames(clsx(...inputs));
}
