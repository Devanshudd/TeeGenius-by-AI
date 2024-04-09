import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import { AiOutlineShopping, AiOutlineHighlight } from 'react-icons/ai';
import state from '../store';
import { CustomButton } from '../components';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header {...slideAnimation("down")}>
            <img 
              src='./threejs.png'
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>

          {/* <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text mr-5">
                LET'S <br className="xl:block hidden" /> DO <br className="xl:block hidden" />  IT.
              </h1>
            </motion.div>

            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal text-white text-base">
              Create your unique and exclusive shirt with our brand-new 3D customization tool. <strong>Unleash your imagination</strong>{" "} and define your own style.
              </p> */}
            <motion.div className="home-content" {...headContainerAnimation}>
              <motion.div {...headTextAnimation}>
                <div className="section--container">
                  <h1>LET'S DO IT.</h1>
                </div>
              </motion.div>
                
              <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
              >
                <div className="support--content">
                  <p>
                    Create your unique and exclusive shirt with our brand-new 3D customization tool. <strong>Unleash your imagination</strong> and define your
                    own style.
                  </p>
                  <CustomButton 
                  type="filled"
                  title="Customize It 🌿"
                  handleClick={() => state.intro = false}
                  customStyles="w-fit px-4 py-2.5 font-bold text-sm" />
                </div>
              </motion.div>    
            </motion.div>
          
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home