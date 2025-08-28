import * as THREE from 'three';
import { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Image as DreiImage } from '@react-three/drei'

import { workExperiences } from '../constants/index.js';

const RotatingIcon = ({ src }) => {
  const ref = useRef()
  useFrame(() => {
    if (!ref.current) return
    ref.current.rotation.x += 0
    ref.current.rotation.y += 0.01
  })

  return (
    <DreiImage
        style={{ width: '100%', height: '100%' }}
        ref={ref}
        url={src}
        scale={6}
        side={THREE.DoubleSide}
    />
  )
}

const Experience = () => {
    const [animationName, setAnimationName] = useState('idle');

    return (
        <section className="c-space my-20" id="experience">
            <div className="w-full">
                <p className="head-text">My Work Experience</p>
                <div className="work-container">
                    <div className="work-content">
                        <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                            {workExperiences.map((item, index) => (
                                <div
                                    key={index}
                                    onPointerOut={() => setAnimationName('idle')}
                                    className="work-content_container group">
                                    <div className="flex flex-col h-full justify-start items-center py-2">
                                        <div className="work-content_logo">
                                            <Canvas style={{ width: '100%', height: '100%' }} >
                                                <RotatingIcon src={`${import.meta.env.BASE_URL}${item.icon}`} />
                                            </Canvas>
                                        </div>

                                        <div className="work-content_bar" />
                                    </div>

                                    <div className="sm:p-5 px-2.5 py-5">
                                        <p className="font-bold work-content_header">{item.name}</p>
                                        <p className="text-sm mb-5">
                                            {item.pos} -- <span>{item.duration}</span>
                                        </p>
                                        <p className="group-hover:text-white transition-all ease-in-out duration-500">{item.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;