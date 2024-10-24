import { NewsCard } from "../molecules";

export default function TopNews() {
  return (
    <div className="grid grid-cols-2 gap-20 mt-5">
        <NewsCard />
        <NewsCard />
    </div>
  )
}