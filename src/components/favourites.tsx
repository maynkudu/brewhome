import React, { useState } from "react"
import { Favourites as FavouritesType } from "../types/interface"
import { BsArrow90DegRight, BsLink45Deg, BsTerminal, BsX } from "react-icons/bs"

interface FavouritesProps {
  favourites: FavouritesType[]
  onAdd: (fav: FavouritesType) => void
  onRemove: (name: string) => void
}

const Favourites: React.FC<FavouritesProps> = ({ favourites, onAdd, onRemove }) => {
  const [newFavourite, setNewFavourite] = useState<FavouritesType>({ name: "", link: "" })

  const handleAdd = () => {
    if (!newFavourite.name || !newFavourite.link) {
      alert("Both name and link are required!")
      return
    }
    onAdd(newFavourite)
    setNewFavourite({ name: "", link: "" })
  }

  return (
    <div>
      <h2 className="text-xl text-[#8C7A98] font-semibold mb-4">Your Favourites</h2>
      <ul className="mb-4">
        {favourites.map((fav) => (
          <li key={fav.name} className="flex text-[#8C7A98]/90 justify-between items-center mb-2 border-l-2 rounded-sm border-[#8C7A98] py-2 px-4 hover:bg-[#6D52A3]/20 transition-all ">
            <span>
              {fav.name} - <a href={fav.link} className="">{fav.link}</a>
            </span>
            <button
              onClick={() => onRemove(fav.name)}
            >
              <BsX size={24}/>
            </button>
          </li>
        ))}
      </ul>
      {favourites.length < 6 && (
        <div>
            <div className="flex justify-center items-center w-full p-2 border-2 border-[#151013] ">
                <BsArrow90DegRight size={16} className="ml-2"/>
                <input
                type="text"
                placeholder="Name"
                value={newFavourite.name}
                onChange={(e) => setNewFavourite({ ...newFavourite, name: e.target.value })}
                className="outline-none bg-transparent px-2 w-full"

                />
            </div>
            <div className="flex justify-center items-center w-full p-2 border-2 border-[#151013] ">
                <BsLink45Deg size={22}/>
                <input
                  type="text"
                  placeholder="Link"
                  value={newFavourite.link}
                  onChange={(e) => setNewFavourite({ ...newFavourite, link: e.target.value })}
                  className="outline-none bg-transparent px-2 w-full"
                />
            </div>


          <button
            onClick={handleAdd}
            className="bg-transparent border-2 border-[#8C7A98] mt-4 text-[#8C7A98] p-2 rounded w-full hover:bg-[#8C7A98] hover:text-[#161017] transition-all duration-500 "
          >
            Add Favourite
          </button>
        </div>
      )}
    </div>
  )
}

export default Favourites
