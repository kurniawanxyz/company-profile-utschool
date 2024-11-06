import {create} from 'zustand';

interface NewsState {
    news: NewsItem[];
    currentPage: number;
    itemsPerPage: number;
}

interface NewsItem {
    id: string;
    visibility: number;
    thumbnail: string;
    title: string;
    description: string;
    content: string;
    created_at: string;
    updated_at: string;
}

interface NewsState {
    news: NewsItem[];
    currentPage: number;
    itemsPerPage: number;
    setNews: (news: NewsItem[]) => void;
    setCurrentPage: (page: number) => void;
    paginatedNews: () => NewsItem[];
    totalPages: () => number;
}

export const useNewsStore = create<NewsState>((set, get) => ({
    news: [],
    currentPage: 1,
    itemsPerPage: 5,
    setNews: (news) => set({ news }),
    setCurrentPage: (page) => {
        const totalPages = get().totalPages();
        if (page > 0 && page <= totalPages) {
            set({ currentPage: page });
        }
    },
    paginatedNews: () => {
        const { news, currentPage, itemsPerPage } = get();
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        return news.slice(start, end);
    },
    totalPages: () => {
        const { news, itemsPerPage } = get();
        return Math.ceil(news.length / itemsPerPage);
    },
}));