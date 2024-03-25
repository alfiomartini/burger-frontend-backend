// import { useState } from "react";
// import { Burger } from "../../interfaces";
// import { getBurgers } from "../../api/fetchApis";
// import { handleApiError } from "../../utilities";

export function Burgers() {
  // const [burgers, setBurgers] = useState<Burger[]>([]);

  // useEffect(() => {
  //   let active = true;
  //   const fetchBurgers = async () => {
  //     try {
  //       const _burgers: Burger[] = await getBurgers();
  //       if (active) setBurgers(_burgers);
  //     } catch (error) {
  //       handleApiError(error);
  //     }
  //   };

  //   fetchBurgers();

  //   return () => {
  //     active = false;
  //     console.log("Cleaning Get Burgers");
  //   };
  // }, []);
  // console.log(burgers);

  return <h3>Burgers</h3>;
}
