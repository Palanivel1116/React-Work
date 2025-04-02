import ItemList from "./itemList";
const RestaurantCategory=({info,showItems,setShowIndex})=>{
    const handleclick=()=>{
      setShowIndex();
    }
    return(
         <div>
       {/* Header */}
       <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4 ">
       <div className="flex justify-between cursor-pointer"
        onClick={handleclick}>
        <span className="font-bold text-lg">
      {info.title}({info.itemCards.length})</span>
        <span>⬇️</span>
       
       </div>
       {/* Accordion Body */}
      { showItems && <ItemList items={info.itemCards}/>}
    </div>
    </div>
    )
}
export default RestaurantCategory;