import Hero from './Hero'

const HomeView = () => {
    return (
        <>
            {/* using the prop from Hero.js to create dynamic content */}
            <Hero text="Welcome to THE Movie Browser"/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 my-5">
                        <p className="lead">
                            Hello and welcome to the most amazing, fantastically brilliant,
                            undoubtedly outstanding, overwhelmingly stupendous, outrageously
                            vivacious, undeniably insurmountable, increasingly usable Home page
                            of my React.js 201 Movie Browser app. 
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeView;