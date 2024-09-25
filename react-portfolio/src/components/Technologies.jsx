import { RiReactjsLine } from "react-icons/ri";
import { DiGithubBadge } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { FaPython } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { animate, inView, motion } from "framer-motion";
const iconVariants = (duration)=>({
  initial: {y:-10},
  animate: {
    y:[10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{opacity: 1, y:0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 1.5}}
      className="my-20 text-center text-4xl">Technologies</motion.h1>
      <motion.div whileInView={{opacity: 1, x: 0}}
      initial={{opacity: 0, x:-100}}
      transition={{duration: 1.5}}
       className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-4xl text-cyan-400"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiGithubBadge className="text-4xl"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiHtml5 className="text-4xl text-orange-400"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(6)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaPython className="text-4xl text-yellow-400"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(3.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaJsSquare className="text-4xl text-yellow-500"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(5.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <BiLogoMongodb className="text-4xl text-green-500"/>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies
