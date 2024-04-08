import React, { useState, useEffect } from 'react';
import axios from "axios";

export function CategoryList() {
    const [categories, setCategories] = useState([]);
    const [addCategory, setAddCategory] = useState();

    useEffect(() => {
        fetchCategory();
    },[]);

    function fetchCategory() {
        fetch("http://localhost:4000/categories").then((res)=> res.json()).then((data)=> setCategories(data));
    };

    function CategoryValue(event) {
        setAddCategory(event.target.value);
    }

    async function createCategory() {
        try {
          await axios
            .post("http://localhost:4000/categories", { addCategory })
            .then(() => {});
          setAddCategory("");
          fetchCategory();
        } catch (error) {
          console.log(error);
        }
      }
  return (
    <main>
      <div className="">
        
      </div>
    </main>
  )
}
