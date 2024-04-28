import './Education.sass'

export const Education = () => {
    return (
        <div id='education' className="education">
            <div className="container">
                <div className="education__inner">
                    <h2>EDUCATION</h2>
                    <div className="timeline__items">

                        <div className='timeline-item'>
                            <div className='timeline-dot'></div>
                            <div className='timeline-date'>2020-2024</div>
                            <div className='timeline-content'>
                                <h3>IT college</h3>
                                <p>Faculty: Information Technology</p>
                                <p>Speciality: Computer Technology & Software</p>
                            </div>
                        </div>

                        <div className='timeline-item'>
                            <div className='timeline-dot'></div>
                            <div className='timeline-date'>2024</div>
                            <div className='timeline-content'>
                                <h3>Attractor School</h3>
                                <p>Programming direction: Fullstack Developer (React + NodeJs)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
