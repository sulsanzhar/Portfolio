import 'boxicons'
import './Promo.sass'

export const Promo = () => {
    return (
        <div id='promo' className='promo'>
            <div className="container">
                <div className="promo__inner">
                    <div className='promo__inner-content'>
                        <h1>Hi, I`m Sanzhar</h1>
                        <h2 className='text-animation'>I`m a <span></span></h2>
                        <p>I am soon finishing my 4th year of study and I really want to find a job in my field, because I like it. 
                            Among my qualities I can mention Logical thinking, Patience and perseverance, Self-organization and time management, 
                            Responsibility, Striving for self-development.</p>
                        <nav>
                            <ul>
                                <li>
                                    <a href="https://www.instagram.com/s.u.l.s.a.n.z.h.a.r/" target='_blank'>
                                        <box-icon 
                                            className='messenger'
                                            type='logo' 
                                            name='instagram'
                                            color='white'
                                            animation='tada-hover'
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://t.me/sulsanzhar" target='_blank'>
                                        <box-icon 
                                            className='messenger'
                                            type='logo' 
                                            name='telegram'
                                            color='white'
                                            animation='tada-hover'
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://wa.me/87776813503" target='_blank'>
                                        <box-icon 
                                            className='messenger'
                                            name='whatsapp' 
                                            type='logo'
                                            color='white'
                                            animation='tada-hover'
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/sulsanzhar" target='_blank'>
                                        <box-icon 
                                            className='messenger'
                                            name='github' 
                                            type='logo'
                                            color='white'
                                            animation='tada-hover'
                                        />
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className='promo__inner-photo'>
                        <div className='promo__inner-photo-inner'>
                            <img src="https://i.postimg.cc/XYWSdLsT/photo-2023-08-28-01-21-21.jpg" alt="promo-img"/>
                            <div className='animation'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
