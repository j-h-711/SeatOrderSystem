import { useState, useEffect } from "react";
import axios from "axios";

interface Menu {
  _id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image?: string;
}

const useGetMenus = () => {
  const [menus, setMenus] = useState<Menu[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${process.env.REACT_APP_DB_API_ENDPOINT}/menus`
        );
        setMenus(response.data);
      } catch (err) {
        setError("메뉴를 불러오는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchMenus();
  }, []);

  return { menus, loading, error };
};

export default useGetMenus;
