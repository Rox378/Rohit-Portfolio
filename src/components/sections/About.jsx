import { RevealOnScroll } from "./RevealOnScroll"

export const About = () => {

    const frontendSkills = [
        "React",
        "TailwindCSS",
        "Bootstrap",
        "Ant Design",
        "JavaScript",
        "HTML",
        "CSS"
    ]

    const backendSkills = [
        "Node.js",
        "Express.js",
        "MongoDB"
    ]

    return (
        <section id="about"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                        About Me
                    </h2>
                    <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6">

                            Passionate developer with expertise in building scalable web application and creating innovative solution.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                   hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                               "
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>


                            </div>
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Backend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {backendSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                   hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                               "
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>


                            </div>

                        </div>


                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                Education 📖
                            </h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong>BE in Electrical and Electronics</strong>- RGTU Bhopal
                                    (2008-2012)
                                </li>
                                <li>
                                    Relevent Coursework: Web Development, Frnotend Development, Database Design.
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                Work Experiance 💼
                            </h3>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="font-semibold">
                                        Marketing Executive at Lalima Enterprises (2022)</h4>
                                    <p>Planned and executed marketing campaigns to drive brand awareness and customer engagement. Conducted market research, managed digital channels, and analyzed campaign performance.</p>

                                </div>
                                <div>
                                    <h4 className="font-semibold">
                                        Marketing Specialist at Thaare sofware solution pvt. Ltd.(2022-2023)</h4>
                                    <p>
                                        Executed digital marketing campaigns, managed social media and email outreach, and conducted market research. Collaborated remotely with cross-functional teams and contributed to UI/UX improvements for better user engagement and conversion.

                                    </p>

                                </div>
                                <div>
                                    <h4 className="font-semibold">
                                        Student trainee at CNC Web World Technologies Pvt. Ltd.(2024-2025)</h4>
                                    <p>
                                        Completed hands-on training in web development, working on projects like Kids Academy. Gained experience in front-end technologies and deployed completed projects to GitHub for portfolio showcase.

                                    </p>

                                </div>


                            </div>
                        </div>

                    </div>

                </div>
            </RevealOnScroll>

        </section>
    )
} 