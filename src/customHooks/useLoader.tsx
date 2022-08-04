import React, { Dispatch, SetStateAction, useState } from 'react'

const useLoader = () => {
    const [loading, setLoading] = useState(false);

    const handleLoading = (value: boolean) => {
        if (value == true) setLoading(false)
        if (value == false) setLoading(true)
    }

    return [loading, handleLoading];
}

export default useLoader