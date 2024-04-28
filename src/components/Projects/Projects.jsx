import './Projects.sass'

export const Projects = () => {
    return (
        <div id='projects' className="projects">
            <div className="container">
                <div className="projects__inner">
                    <h2>PROJECTS</h2>
                    <div className='projects__cards'>
                        <div className='projects__card'>
                            <h4>ToDo App</h4>
                            <p className='description'>
                                Это приложение для управления задачами, созданное с использованием технологии React. 
                                Пользовательский интерфейс прост и интуитивно понятен, что делает использование приложения удобным и эффективным 
                                для организации рабочих или повседневных дел.
                            </p>
                            <div className='technologies'>
                                <p>React</p>
                                <p>Typescript</p>
                                <p>Css</p>
                            </div>
                            <a 
                                target='_blank'
                                href="https://sulsanzhar.github.io/ToDo-App/">
                                    Tab here to see
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
