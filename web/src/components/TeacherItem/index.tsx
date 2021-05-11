import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
    return(
        <article className="teacher-item">
            <header>
                <img src="https://scontent.fssa6-1.fna.fbcdn.net/v/t1.0-0/c0.0.206.206a/p206x206/34050716_1288938444574858_4637622282250878976_o.jpg?_nc_cat=105&_nc_sid=da31f3&_nc_ohc=Fd5ADLlre04AX-qVju3&_nc_ht=scontent.fssa6-1.fna&oh=2e2f7f174b1d8c254fd1dc2954d8d7df&oe=5F4F180F" alt="Ludmila Paixao"/>
                <div>
                    <strong>Ludmila Paixao</strong>
                    <span>Biologia</span>
                </div>
            </header>
                <p>
                    Entusiasta das melhores tecnologias de biologia avancada.
                    <br/><br/>
                    Apaixonada por partes humanas.
                </p>

                <footer>
                    <p>
                        Preco/hora
                        <strong>R$1.000.000.00</strong>
                    </p>
                    <button type="button">
                        <img src={whatsappIcon} alt="Whatsapp"/>
                        Entrar em contato
                    </button>
                </footer>
        </article>
    )
}

export default TeacherItem;