"use client";

import style from "../search.module.css";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
const Tab = () => {
  const [current, setCurrent] = useState("hot");
  const router = useRouter();
  const searchParams = useSearchParams();
  const onClickHandler = (value: string) => {
    setCurrent(value);
    switch (value) {
      case "new":
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set("f", "live");
        router.replace(`/search?${newSearchParams.toString()}`);
        break;

      default:
        const defaultSearchParams = new URLSearchParams(searchParams);
        defaultSearchParams.delete("f");
        router.replace(`/search?${defaultSearchParams.toString()}`);
    }
  };

  return (
    <div className={style.homeFixed}>
      <div className={style.homeTab}>
        <div
          onClick={() => {
            onClickHandler("hot");
          }}
        >
          인기
          <div className={style.tabIndicator} hidden={current === "new"}></div>
        </div>
        <div
          onClick={() => {
            onClickHandler("new");
          }}
        >
          최신
          <div className={style.tabIndicator} hidden={current === "hot"}></div>
        </div>
      </div>
    </div>
  );
};

export default Tab;
