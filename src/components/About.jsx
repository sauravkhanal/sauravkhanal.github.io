const About = () => {
    return (
        <div id="about" className="max-w-3xl py-10 text-gray-600 px-12">
            <h2 className="text-2xl text-black font-bold">About Me</h2>
            <hr />
            <p className="text-justify pt-3">
                Hello there! I'm Saurav, a final year computer engineering student with a passion for building innovative solutions. As I navigate through the exciting world of programming, I'm on the lookout for new opportunities to apply my skills and contribute to impactful projects. Let's connect and explore the endless possibilities at the intersection of technology and creativity!
            </p>

            <h2 className="text-2xl text-black font-bold pt-5">Education</h2><hr />
            <div className="">
                <h3 className="text-xl font-semibold text-gray-700 pt-3">Bachelor's Degree</h3>
                <p className="">Bachelor's Degree in Computer Engineering <br />Kathmandu Engineering college, TU | 2019-2024 </p>
                <h3 className="text-xl font-semibold text-gray-700 pt-3">High School</h3>
                <p>Bagmati Modern College, (GPA 3.38) 2017-2019 </p>
                <h3 className="text-xl font-semibold text-gray-700 pt-3">School</h3>
                <p>Brain Land Academy, (GPA 3.70) | 2017 </p>
            </div>

            <h2 className="text-2xl text-black font-bold pt-5">Skills</h2><hr />
            <div className="flex gap-5 pt-3 flex-wrap justify-center">
                <img src="https://cdn.svgporn.com/logos/html-5.svg" alt="HTML" loading="lazy" title="HTML" width={48} />
                <img src="https://cdn.svgporn.com/logos/css-3.svg" alt="CSS" loading="lazy" title="CSS" width={48} />
                <img src="https://cdn.svgporn.com/logos/javascript.svg" alt="JavaScript" loading="lazy" title="JavaScript" width={48} />
                <img src="https://cdn.svgporn.com/logos/react.svg" alt="React" loading="lazy" title="React" width={48} />
                <img src="https://cdn.svgporn.com/logos/tailwindcss-icon.svg" alt="tailwind" loading="lazy" title="tailwind" width={48} />
                <img src="https://cdn.svgporn.com/logos/python.svg" alt="python" loading="lazy" title="python" width={48} />
                <img src="https://cdn.svgporn.com/logos/fastapi-icon.svg" alt="React Native" loading="lazy" title="FastApI" width={48} />
                <img src="https://cdn.svgporn.com/logos/nginx.svg" alt="Nginx" loading="lazy" title="Nginx" width={48} />
                <img src="https://cdn.svgporn.com/logos/git-icon.svg" alt="Git" loading="lazy" title="Git" width={48} />
            </div>
        </div>
    )
}

export default About