import { Children } from "react";
import { createContext } from "react";

const ShopContext = createContext()
export default ShopContext

export function ShopProvider({children}){
 
     return(
        <ShopContext.Provider value={addToCard}>
            {children}
        </ShopContext.Provider>
     )
}

