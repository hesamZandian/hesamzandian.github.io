import {useEffect, useState} from 'react'
import {portfolioInfo} from "../constants/portfolioInfo";

const useHome = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, [])


    return {loading, portfolioInfo}
}
export default useHome