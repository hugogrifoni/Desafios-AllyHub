import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    return (
        <section>
            <div>
                Dados pessoais
            </div>

            <div>
                Destinos
            </div>
        </section>
    );
}

export default Home;