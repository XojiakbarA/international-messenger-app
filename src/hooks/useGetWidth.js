import { useEffect, useRef, useState } from "react"

export const useGetWidth = () => {

    const ref = useRef(null)

    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(ref?.current?.offsetWidth)
    }, [])

    return { ref, width }
}