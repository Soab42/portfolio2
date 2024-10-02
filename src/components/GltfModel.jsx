import { useAnimations, useGLTF } from '@react-three/drei';
import React from 'react';
import { useLayoutEffect } from 'react';
import { useRef } from 'react';


const ModelViewer = ({ modelPath, ...props }) => {
    const group = useRef()
    const { scene, animations } = useGLTF(modelPath); // Load the model
    const { actions } = useAnimations(animations, group)

    // Add animation for the fish
    useLayoutEffect(() => {
        // Check if there are any animations
        if (actions && Object.keys(actions).length > 0) {
            console.log("Available animations:", Object.keys(actions))

            // Play all available animations
            Object.values(actions).forEach(action => {
                if (action && typeof action.play === 'function') {
                    action.play()
                }
            })

            // Clean up function to stop animations when component unmounts
            return () => {
                Object.values(actions).forEach(action => {
                    if (action && typeof action.stop === 'function') {
                        action.stop()
                    }
                })
            }
        } else {
            console.log("No animations found in the model")
        }
    }, [actions])
    return <primitive object={scene} {...props} ref={group} />;
};

export default ModelViewer;
