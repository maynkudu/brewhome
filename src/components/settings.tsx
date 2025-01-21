import React, { useState } from "react"
import { useData } from "../context/DataContext"

import {motion, Variants} from 'framer-motion'
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
                whileHover={{rotate : 20}}
                initial={{rotate : 0}}
                animate={{rotate : isOpen ? 90 : 0}}
                transition={{type: 'inertia', }}
                >
                <BsGearWideConnected size={24}/>
            </motion.button>

            {/* Settings Modal */}
            {isOpen && (
                <motion.div
                    initial={false}
                    transition={{
                      type: "spring",
                      bounce: 0,
                      duration: isOpen ? 0.7 : 0.3,
                    }}
                    className="absolute h-[70vh] w-[30vw] rounded-lg bottom-8 right-20 bg-[#151013]/90 backdrop-blur-sm p-8 text-white border-2 border-[#8C7A98]"

                    >
                        <Favourites favourites={data.favourites} onAdd={handleAddFavourite} onRemove={handleRemoveFavourite} />

                </motion.div>
            )}
        </div>
    )
}

export default Settings
