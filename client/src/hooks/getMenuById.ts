import { useState, useEffect } from "react";
import axios from "axios";

const useGetMenuById = (id: string | undefined) => {
  const [menu, setMenu] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      // console.log(id); // 확인
      const fetchMenu = async () => {
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_DB_API_ENDPOINT}/menus/${id}`
          );
          setMenu(response.data);
        } catch (err) {
          setError("Error fetching menu");
        } finally {
          setLoading(false);
        }
      };
      fetchMenu();
    }
  }, [id]);

  return { menu, loading, error };
};

export default useGetMenuById;
