import React, { useState } from "react";
import "./styles.css";
import Menu from "./menuapi";
import MenuCard from "./menucard";
import Navbar from "./navbar";
const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];
const Resturant = () => {
  const [menuData, setmenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);
  const filterItem = (category) => {
    if (category === "All") {
      setmenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setmenuData(updatedList);
  };
  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Resturant;
