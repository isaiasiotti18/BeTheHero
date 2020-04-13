import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api'
import './style.css';
import LogoImg from '../../assets/logo.svg';


// import { Container } from './styles';

export default function NewIncidents() {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [value, setValue] = useState('');

	const history = useHistory();
	const ongId = localStorage.getItem('ongId');

	async function handleNewIncident(e) {
		e.preventDefault();
		const data = {
			title,
			description,
			value
		}

		try {
			await api.post('incidents', data, {
				headers: {
					Authorization: ongId,
				}
			})
			history.push('/profile')
		} catch (err) {
			alert('Erro ao tentar cadastrar! Tente Novamente!')
		}
	}

	return (
		<div className="new-incident">
			<div className="content">
				<section>

					<img src={LogoImg} alt="Be The Hero"/>
					<h1>Cadastro</h1>
					<p>
						Descreva o caso detalhadamente para encontrar um herói para resolver isso
					</p>

					<Link to="/profile" className="back-link">
						<FiArrowLeft size={16} color="#e02041"/>
						Voltar para a Home
					</Link>

				</section>

				<form onSubmit={handleNewIncident}>
					<input placeholder="Título do caso"
						value={title}
						onChange={e => setTitle(e.target.value)}
					/>
					<textarea placeholder="Descrição"
						onChange={e => setDescription(e.target.value)}
					/>
					<input placeholder="Valor em R$ (Reais)"
						onChange={e => setValue(e.target.value)}
					/>

					<button className="button" type="submit">Cadastrar</button>
				</form>
			</div>
		</div>
  );
}
