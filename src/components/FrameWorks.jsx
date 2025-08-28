import { OrbitingCircles } from "./OrbitingCircle";
import { skills } from "../constants";


const FrameWorks = () => {
    return (
        <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
            <OrbitingCircles iconSize={40}>
                {skills.map((skills, index) => (
                    <Icon key={index} src={`${import.meta.env.BASE_URL}${skills.img}`} />
                ))}
            </OrbitingCircles>
            <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
                {skills.reverse().map((skills, index) => (
                    <Icon key={index} src={`${import.meta.env.BASE_URL}${skills.img}`} />
                ))}
            </OrbitingCircles>
        </div>
    );
}

const Icon = ({ src }) => (
    <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);

export default FrameWorks;