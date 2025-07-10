import { createContext, useContext, useState } from "react";
import { provinceData } from "../components/utils/constants/province";

const CovidContext = createContext();

export const CovidProvider = ({ children }) => {
  const [data, setData] = useState(provinceData.rows); // ✅ penting: pakai .rows

    const addData = ({ province, status, amount }) => {
        const updated = data.map((item) => {
        if (item.province === province) {
            return {
            ...item,
            [status]: item[status] + Number(amount)
            };
        }
        return item;
        });

        setData(updated);
    };

    return (
        <CovidContext.Provider value={{ data, addData }}>
        {children}
        </CovidContext.Provider>
    );
    };

export const useCovid = () => useContext(CovidContext);
