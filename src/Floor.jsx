import { useTexture } from "@react-three/drei";

export default function Floor() {

    const PATH = "/static/textures/floor/"

    const props = useTexture({

        aoMap: PATH + 'AO.jpg',
        map: PATH + 'color.jpg',
        normalMap: PATH + 'normal.jpg',
    
        displacementMap: PATH + 'height.png',
       
    })


    return (
        <mesh receiveShadow  position={[-0.05, -2.5, 0]} rotation-x={ - Math.PI * 0.5 }>
            <planeGeometry args={[30.2, 30.5]} />
            <meshStandardMaterial {...props} color= 'rgb(193, 193, 193)' />
        </mesh>
    )
}
