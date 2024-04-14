import { useState,useEffect } from "react";
const useMenuInfo = (resId) => {
    console.log("did i reached ")
    const [menuInfo, setMenuInfo] = useState({});
    useEffect(() => {
        fetchMenu();
      }, []);

      const fetchMenu = async () => {
        console.log('am i called')
        const data = await fetch(`
        https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
        const restaurantInfo = await data.json();
        setMenuInfo(
          restaurantInfo.data
        );
      };
   
      return menuInfo;
    
}

export default useMenuInfo;