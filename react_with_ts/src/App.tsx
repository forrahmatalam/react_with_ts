
import React, { useEffect, useState } from "react";
import axios from "axios";
import type { Products } from "./types";
import ProductCard from "./components/ProductCard";

type Props = {};

const App = (props: Props) => {
  const [data, setData] = useState<Products[]>([]);

  const getData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");

    setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  return (
    <div>
      {data.map((val) => (
        <ProductCard key={val.id} product={val} />
      ))}
    </div>
  );
};

export default App;

