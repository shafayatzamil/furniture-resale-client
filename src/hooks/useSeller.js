import { useEffect, useState } from "react";

const useSeller = (user) => {
  const [seller, setSeller] = useState(false);
  const [sellerLoading, setSellerLoading] = useState(true);
  useEffect(() => {
    const email = user?.email;
    if (email) {
      fetch(`https://furniture-resale-server.vercel.app/seller/${email}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          // authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setSeller(data.seller);
          setSellerLoading(false);
        });
    }
  }, [user]);

  return [seller, sellerLoading];
};
export default useSeller;
