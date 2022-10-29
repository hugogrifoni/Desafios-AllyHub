import { React, useState, useEffect } from 'react';
import Select from 'react-select';
import './App.css';
import axios from 'axios';
import API_URL from './constants';

function App() {
	const paises = [
		{ value: 'brasil', label: 'Brasil' },
		{ value: 'eua', label: 'Estados Unidos' },
		{ value: 'inglaterra', label: 'Inglaterra' },
		{ value: 'africa do sul', label: 'África do Sul' },
	];

	const cidades = [
		{ value: 'São Paulo', label: 'São Paulo' },
		{ value: 'ny', label: 'New York' },
		{ value: 'london', label: 'Londres' },
		{ value: 'cidade do cabo', label: 'Cidade do Cabo' },
	];

	const [country, setCountry] = useState();

	useEffect(() => {
		axios.get(`${API_URL}/country`).then((response) => {
			const { data } = response;
      const countryFormatted = data?.map(pais => {
        return {
          value: pais.code,
          label: pais.name_ptbr
        }
      })
			setCountry(countryFormatted);
		});
	}, []);


	return (
		<section className='mainContainer'>
     
			<div className='formData'>
				<p>Dados pessoais</p>
				<input type='txt' placeholder='Nome' />
				<input
					type='email'
					name='e-mail'
					id='e-mail'
					placeholder='Ex.: hugo@allyhub.co'
				/>
				<input
					type='tel'
					name='tel'
					id='tel'
					placeholder='(DDD)xxxxx-xxxx'
				/>
				<input type='cpf' placeholder='CPF' />
			</div>

			<div className='formLocale'>
				<p>Destinos</p>
				<Select isMulti options={country} />

				<br />
				<Select isMulti options={cidades} />
			</div>
      
		</section>
	);
}

export default App;
