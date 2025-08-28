import { twMerge } from "tailwind-merge";
import Marquee from "../components/Marquee";
import { skills } from "../constants";
const firstRow = skills.slice(0, skills.length / 2);
const secondRow = skills.slice(skills.length / 2);

const ReviewCard = ({ img, name }) => {
    return (
        <figure
            className={twMerge(
                "skill-container hover:bg-royal hover-animation"
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <img
                    className="rounded-full bg-white/10"
                    width="32"
                    height="32"
                    alt=""
                    src={`${import.meta.env.BASE_URL}${img}`}
                />
                <figcaption className="text-sm font-medium text-white">
                    {name}
                </figcaption>
            </div>
        </figure>
    );
};

const Skills = () => {
    return (
        <div className="c-space my-20">
            <p className="head-text">Skills</p>
            <div className="relative flex flex-col items-center justify-center w-full mt-12 overflow-hidden">
                <Marquee pauseOnHover className="[--duration:20s]">
                    {firstRow.map((review) => (
                        <ReviewCard key={review.name} {...review} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:20s]">
                    {secondRow.map((review) => (
                        <ReviewCard key={review.name} {...review} />
                    ))}
                </Marquee>
            </div>
        </div>
    );
}

export default Skills;