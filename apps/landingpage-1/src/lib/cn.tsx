// utils/cn.ts

function cn(...classNames: (string | false | undefined | null)[]): string {
    return classNames.filter(Boolean).join(' ');
}

export default cn;
