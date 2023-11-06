import React, { useEffect, useState } from 'react';
import portfolioData from '../../data/portfolio.json';
import { Link } from 'react-router-dom';
import { useMemo } from 'react';
import "./portfolio.scss";

export default function Portfolio({collapsed}) {
	const [data, setData] = useState([]);
	const [activeTab, setActiveTab] = useState('All');

	useEffect(() => {
		setData(portfolioData);
	}, []);

	const displayData = useMemo(() => {
		return data.filter((item) => item.category === activeTab || activeTab === 'All');
	}, [activeTab, data]);

	return (
		<div className={`container ${collapsed? `collapsed`:null}`}>
			<ul className="tabs">
				<li className={`tabs-item ${activeTab === 'All' ? 'active' : ''}`} onClick={() => setActiveTab('All')}>
					All <span>/</span>
				</li>
				<li className={`tabs-item ${activeTab === 'UI' ? 'active' : ''}`} onClick={() => setActiveTab('UI')}>
					UI <span>/</span>
				</li>
				<li className={`tabs-item ${activeTab === 'Code' ? 'active' : ''}`} onClick={() => setActiveTab('Code')}>
					Code
				</li>
			</ul>

			<section className="portfolio">
				{displayData.map((item) => (
					<article key={item.id} className="portfolio-item">
						<div className="image" style={{ backgroundImage: `url(${item.imgSrc})` }}></div>
						<h2 >{item.title}</h2>
						<p>{item.description}</p>
						<Link to={item.link} target="_blank">
							View source
						</Link>
					</article>
				))}
			</section>
		</div>
	);
}
