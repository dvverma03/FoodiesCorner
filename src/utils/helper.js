export function filterdata(searchBtn, allrestaurants){
    const data= allrestaurants.filter((restra)=>
        restra?.info?.name?.toLowerCase().includes(searchBtn)
    )
    return data;
    }
