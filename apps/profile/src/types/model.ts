export type News = {
    id: string;
    visibility: 0 | 1;
    thumbnail: string;
    title: string;
    description: string;
    content: string;
    created_at: string;
    updated_at: string;
};

export type PaginationLink = {
    url: string | null;
    label: string;
    active: boolean;
};

export type PaginationMeta = {
    current_page: number;
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: PaginationLink[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
};

export type ApiResponseMeta = {
    success: boolean;
    message: string;
    status: number;
};

export type NewsApiResponse = {
    meta: ApiResponseMeta;
    data: {
        current_page: number;
        data: News[];
        first_page_url: string;
        from: number;
        last_page: number;
        last_page_url: string;
        links: PaginationLink[];
        next_page_url: string | null;
        path: string;
        per_page: number;
        prev_page_url: string | null;
        to: number;
        total: number;
    };
};