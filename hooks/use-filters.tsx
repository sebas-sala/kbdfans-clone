"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import qs from "query-string";

export default function useFilter() {
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const current = qs.parse(searchParams.toString());
    const selected = Object.values(current).map((value) => Number(value));
    setSelectedCategories(selected);
  }, [searchParams]);

  const handleClick = (categoryName: string, categoryId: number) => {
    const current = qs.parse(searchParams.toString());
    const categoryIdToString = categoryId.toString();
    const query = {
      ...current,
      [categoryName]: categoryIdToString,
    };

    if (current[categoryName] === categoryIdToString) {
      query[categoryName] = null;
      const newSelectedCategories = selectedCategories.filter(
        (id) => id !== categoryId
      );
      setSelectedCategories(newSelectedCategories);
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(url);
  };

  return {
    selectedCategories,
    handleClick,
  };
}