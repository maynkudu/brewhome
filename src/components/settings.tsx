import React, { useState } from "react"
import { useData } from "../context/DataContext"

import {motion, Variants} from 'motion/react'
import { BsGearWideConnected } from "react-icons/bs"
import Favourites from "./favourites"


const Settings : React.FC = () => {
    const {data, setData} = useData() // Using the data context
    const [isOpen, setIsOpen] = useState<Boolean>(false) // State for the settings button

    // Item Variants :)
    const itemVariants: Variants = {
        open: {
          opacity: 1,
          transition: { type: "spring", stiffness: 300, damping: 24 },
        },
        closed: {
          opacity: 0,
          transition: { duration: 0.2 },
        },
    }

    const handleAddFavourite = (fav: { name: string; link: string }) => {
        setData((prev) => ({
          ...prev,
          favourites: [...data.favourites, fav],
        }))
      }

      const handleRemoveFavourite = (name: string) => {
        setData((prev) => ({
          ...prev,
          favourites: prev.favourites.filter((fav) => fav.name !== name),
        }))
      }



    return (
        <div className="">
            {/* Settings Icon */}
            <motion.button
                onClick={() => setIsOpen((prev) => !prev)}
                className="p-1 hover:opacity-80 transition-all rounded-full text-white fixed bottom-8 right-8"
                whileHover={{rotate : 200, transition: {duration: .2, type: ''}}}
                >
                <BsGearWideConnected size={24}/>
            </motion.button>

            {/* Settings Modal */}
            <motion.div
  initial={false}
  animate={{
    clipPath: isOpen
      ? "inset(0% 0% 0% 0% round 0.5rem)"
      : "inset(100% 0% 0% 100% round 0.5rem)",
    height: isOpen ? "70vh" : "0vh",
    width: isOpen ? "30vw" : "0vw",
  }}
  transition={{
    type: "spring",
    bounce: 0,
    duration: isOpen ? 0.7 : 0.3,
  }}
  className="absolute bottom-8 right-20 bg-[#151013]/90 backdrop-blur-sm text-white  overflow-hidden"
  style={{ willChange: "clip-path, height, width" }}
>
  <motion.div
    className="h-full w-full p-8 border-2 border-[#8C7A98] rounded-lg"
  >
    <Favourites
      favourites={data.favourites}
      onAdd={handleAddFavourite}
      onRemove={handleRemoveFavourite}
    />
  </motion.div>
</motion.div>

        </div>
    )
}

export default Settings
