import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const itemsCollection = collection(db, "products");

    // Subscribe to real-time updates
    const unsubscribe = onSnapshot(itemsCollection, (snapshot) => {
      const fetchedItems = snapshot.docs.map((doc) => ({
        id: doc.id, // Include document ID
        ...doc.data(), // Spread document data
      }));

      setProducts(fetchedItems);
      setIsLoading(false);
    });

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, []);

  return { products, isLoading };
};
