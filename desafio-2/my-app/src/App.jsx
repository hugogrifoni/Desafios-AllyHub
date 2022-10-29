import { React, useState, useEffect } from 'react';
import Select from 'react-select';
import './App.css';
import axios from 'axios';
import API_URL from './constants';

function App() {
	const [country, setCountry] = useState();
	const [city, setCity] = useState();

	useEffect(() => {
		axios.get(`${API_URL}/country`).then((response) => {
			const { data } = response;
			const countryFormatted = data?.map((pais) => {
				return {
					value: pais.code,
					label: pais.name_ptbr,
				};
			});
			setCountry(countryFormatted);
		});

		axios.get(`${API_URL}/city`).then((response) => {
			const { data } = response;
			const cityFormatted = data?.map((cidade) => {
				return {
					value: cidade.code,
					label: cidade.name_ptbr,
				};
			});
			setCity(cityFormatted);
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

			<div className='formData'>
				<p>Destinos</p>
				<div className='selectStyle'>
					<Select isMulti options={country} />
					<br />
					<Select isMulti options={city} />
          <br />
					<input type='button' value='Enviar!' />
				</div>
			</div>
		</section>
	);
}

export default App;
