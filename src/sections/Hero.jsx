import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';
import { Suspense } from 'react';
import { motion } from 'motion/react';

import Desktop from '../components/Desktop.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import CanvasLoader from '../components/CanvasLoader.jsx';
import { calculateSizes } from '../constants/index.js';
import FlipWords from '../components/FlipWords.jsx';

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const words = ["Mobile", "Web", "API"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-1">
        <motion.p className="sm:text-2xl text-xl font-medium text-white"
          variants={variants} initial="hidden" animate="visible" transition={{ delay: 1 }}>
          Hi, I am Tan Hong Chin <span className="waving-hand">👋</span>
        </motion.p>
        <motion.div variants={variants} initial="hidden" animate="visible" transition={{ delay: 1.2 }}>
          <FlipWords words={words} className="text-4xl text-white"/>
        </motion.div>
        <motion.p className="sm:text-2xl text-3xl text-white"
          variants={variants} initial="hidden" animate="visible" transition={{ delay: 1.5 }}>
            Solutions Developer</motion.p>
        <motion.p className="sm:text-2xl text-4xl text-white"
          variants={variants} initial="hidden" animate="visible" transition={{ delay: 1.8 }}>
            Adaptive & Quick Learner</motion.p>
      </div>

      <div className="w-full h-[full] absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>

            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HeroCamera isMobile={isMobile}>
              <Desktop scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.2, Math.PI / 2, 0]}
                onPartClick={(id, obj) => {
                  if (id === 'screen') {
                    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              />
            </HeroCamera>

            <ambientLight intensity={4} />
            <directionalLight position={[0, 0, 10]} intensity={8} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
}

export default Hero;