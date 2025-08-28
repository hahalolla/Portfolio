import { OrbitingCircles } from "./OrbitingCircle";


const FrameWorks = () => {
    const skills = [
        "java",
        "javas2",
        "react",
        "python",
        "csharp",
        "cplus",
        "html",
        "css",
    ];
    return (
        <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
            <OrbitingCircles iconSize={40}>
                {skills.map((skill, index) => (
                    <Icon key={index} src={`/assets/${skill}.png`} />
                ))}
            </OrbitingCircles>
            <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
                {skills.reverse().map((skill, index) => (
                    <Icon key={index} src={`/assets/${skill}.png`} />
                ))}
            </OrbitingCircles>
        </div>
    );
}

const Icon = ({ src }) => (
    <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);

export default FrameWorks;