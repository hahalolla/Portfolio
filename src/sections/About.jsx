import { useState } from 'react';
import FrameWorks from '../components/FrameWorks';

const About = () => {

    const [hasDownload, setHasDownload] = useState(false);
    const handleDownload = () => {
        setHasDownload(true);

        const link = document.createElement('a');
        link.href = 'downloadfile/Resume_Tan Hong Chin.pdf';
        link.download = 'Resume_Tan Hong Chin.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setTimeout(() => {
            setHasDownload(false);
        }, 2000);
    };

    return (
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <div>
                            <p className="grid-headtext">Hi, I’m Tan Hong Chin</p>
                            <p className="grid-subtext">
                                With 2 years of experience, I have honed my skills in both frontend and backend dev, creating dynamic
                                and responsive mobile application and API services.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <div>
                            <p className="grid-headtext">Beginner in React</p>
                            <p className="grid-subtext">
                                Currently exploring React and React Three Fiber to bring interactive 3D experiences to the web.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div>
                            <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
                            <p className="grid-subtext">I&apos;m based in Malaysia and open to relocation or remote work worldwide.</p>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container relative">
                        <div>
                            <p className="grid-headtext w-[60%] z-10">My Passion for Coding</p>
                            <p className="grid-subtext w-[60%] z-10">
                                I love solving problems and building things through code. Programming isn&apos;t just my
                                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
                            </p>
                            <div className="absolute inset-y-0 w-full h-full start-[60%] md:scale-125">
                                <FrameWorks />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <div>
                            <p className="grid-headtext text-center">Resume</p>
                            <div className="copy-container" onClick={handleDownload}>
                                <img src={hasDownload ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                                <p className="lg:text-2xl md:text-xl grid-subtext text-gray_gradient text-white">Download</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default About;