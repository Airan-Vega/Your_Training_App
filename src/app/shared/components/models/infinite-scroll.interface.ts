export interface InfiniteScrollProps {
  threshold: string;
  position: string;
  loadingSpinner: string;
  loadingText: string;
  currentPage: number;
  totalPages?: number;
  getDatas: (currentPage: number) => void;
}
