import React, { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { Data } from "../types/interface";
import { data as initialData } from "../data/data";

const LOCAL_STORAGE_KEY = "appData"

const DataContext = createContext<{
  data: Data;
  setData: React.Dispatch<React.SetStateAction<Data>>
} | undefined>(undefined)



export const DataProvider = ({ children }: {children : ReactNode}) => {
  // Initialize state with data from localStorage
  const [data, setData] = useState<Data>(() => {
    const storedData = localStorage.getItem(LOCAL_STORAGE_KEY)
    return storedData ? JSON.parse(storedData) : initialData
  })

  // Update localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data))
  }, [data])

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  )
}

export const useData = () => {
  const context = useContext(DataContext)
  if (!context) {
    throw new Error("useData must be used within a Data Provider")
  }
  return context
}
