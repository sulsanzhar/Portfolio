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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quae atque excepturi. 
                            Ratione iusto repellendus earum asperiores vel esse a aliquid illo officiis, laborum eos totam corporis consequatur 
                            provident ipsam.</p>
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
                            <img src="./src/img/promo-img.jpeg" alt="promo-img"/>
                            <div className='animation'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
