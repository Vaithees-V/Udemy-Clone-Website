import one from "../assets/images/c1.jpg";
import two from "../assets/images/c2.jpg";
import three from "../assets/images/c3.jpg";
import four from "../assets/images/c4.jpg";

function Popular() {
    return (
        <div>
            <div className="popular">
                <h1 className="popular__title">Most Popular</h1>
                <p className="popular__subtitle">Pick the Best Fit</p>
                <div className="popular__container">

                    <div className="course-card">
                        <img src={one} alt="Course 1"/>
                            <h3>2025 Python Data Visualization Masterclass</h3>
                            <p>Col Steele</p>
                            <p>4.9⭐⭐⭐⭐</p>
                            <p>2000<del>4999</del></p>
                    </div>

                    <div className="course-card">
                        <img src={two} alt="Course 2"/>
                            <h3>2025 Web Development</h3>
                            <p>Col Steele</p>
                            <p>4.9⭐⭐⭐⭐</p>
                            <p>2000<del>4999</del></p>
                    </div>

                    <div className="course-card">
                        <img src={three} alt="Course 3"/>
                            <h3>2025 Ai Masterclass</h3>
                            <p>Col Steele</p>
                            <p>4.9 ⭐⭐⭐⭐</p>
                            <p>2000<del>4999</del></p>
                    </div>

                    <div className="course-card">
                        <img src={four} alt="Course 4"/>
                            <h3>2025 Java Programming</h3>
                            <p>Col Steele</p>
                            <p>4.9⭐⭐⭐⭐</p>
                            <p>2000<del>4999</del></p>
                    </div>
                    <div className="course-card">
                        <img src={one} alt="Course 1"/>
                            <h3>2025 Python Data Visualization Masterclass</h3>
                            <p>Col Steele</p>
                            <p>4.9⭐⭐⭐⭐</p>
                            <p>2000<del>4999</del></p>
                    </div>

                    <div className="course-card">
                        <img src={two} alt="Course 2"/>
                            <h3>2025 Web Development</h3>
                            <p>Col Steele</p>
                            <p>4.9⭐⭐⭐⭐</p>
                            <p>2000<del>4999</del></p>
                    </div>

                    <div className="course-card">
                        <img src={three} alt="Course 3"/>
                            <h3>2025 Ai Masterclass</h3>
                            <p>Col Steele</p>
                            <p>4.9 ⭐⭐⭐⭐</p>
                            <p>2000<del>4999</del></p>
                    </div>

                    <div className="course-card">
                        <img src={four} alt="Course 4"/>
                            <h3>2025 Java Programming</h3>
                            <p>Col Steele</p>
                            <p>4.9⭐⭐⭐⭐</p>
                            <p>2000<del>4999</del></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popular;