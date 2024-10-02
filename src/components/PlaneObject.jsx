import React from 'react'
import { Plane, useTexture } from '@react-three/drei'

export default function PlaneObject(props) {
    const image = useTexture(props?.image)
    return (
        <Plane {...props}>
            <meshBasicMaterial map={image} transparent={true} />
        </Plane>
    )
}
