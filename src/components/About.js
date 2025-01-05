import User from "./User";
import UserClass from "./UserClass";



const About = () => {
    return (
        <div>
            <h1>
                About
            </h1>
            <h2>
                this is About
            </h2>
            {/* <User name={"Samarth function"} /> */}
            <UserClass name={"Samarth class"}/>
        </div>
    );
};

export default About;