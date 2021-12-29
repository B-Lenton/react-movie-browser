import Hero from "./Hero";

const AboutView = () => {
    return (
        <>
            {/* using the prop from Hero.js to create dynamic content */}
            <Hero text="About Us"/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 my-5">
                        <p className="lead">
                            Oh, hey. So you want to know more about us, huh?
                            Well, let me tell you a thing or two about what may
                            just be the best Movie Browser <i>ever</i> created.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutView;