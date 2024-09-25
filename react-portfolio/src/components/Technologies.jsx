import { RiReactjsLine } from "react-icons/ri";
import { DiGithubBadge } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { FaPython } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-4xl text-cyan-400"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiGithubBadge className="text-4xl"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiHtml5 className="text-4xl text-orange-400"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaPython className="text-4xl text-yellow-400"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaJsSquare className="text-4xl text-yellow-500"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <BiLogoMongodb className="text-4xl text-green-500"/>
        </div>
      </div>
    </div>
  )
}

export default Technologies
