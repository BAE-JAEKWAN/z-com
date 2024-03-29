import Link from "next/link";
import style from "./trend.module.css";
const Trend = ({ trend }: { trend?: any }) => {
  return (
    <Link href={`/search?q=${trend.title}`} className={style.container}>
      <div className={style.count}>실시간트렌드</div>
      <div className={style.title}>{trend.title}</div>
      <div className={style.count}>{trend.count.toLocaleString()} posts</div>
    </Link>
  );
};

export default Trend;
