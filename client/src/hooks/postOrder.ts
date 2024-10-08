import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

interface OrderItem {
  id: string;
  quantity: number;
}

interface OrderData {
  tableNumber: number;
  items: OrderItem[];
}

const usePostOrder = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const order = useSelector((state: RootState) => state.order);

  const postOrder = async (cartItems: OrderItem[], tableNumber: number) => {
    setLoading(true);
    setError(null);

    const orderData: OrderData = {
      tableNumber,
      items: order.items.map((item) => ({
        id: item.id,
        quantity: item.quantity,
      })),
    };

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_DB_API_ENDPOINT}/orders`,
        orderData
      );
      setLoading(false);
      return response.data;
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
      setLoading(false);
      throw new Error(err.message);
    }
  };

  return { postOrder, loading, error };
};

export default usePostOrder;
