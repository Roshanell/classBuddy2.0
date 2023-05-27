import React from "react";
import { useState } from "react";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";

function Flashcard({ card, audio, toDelete }) {
	const [isFlipped, setIsFlipped] = useState(false);

	const handleClick = () => {
		setIsFlipped(!isFlipped);
	};

	return (
		<div>
			<Card
				style={{ width: "18rem" }}
				className={`create-card ${isFlipped ? "flipped" : ""}`}
				onClick={handleClick}
			>
				<Card.Body className="front">
					<Badge bg="danger">{card.tag ? <div>{card.tag}</div> : null}</Badge>

					<Card.Title>{card.concept}</Card.Title>

					{card.imagelink ? (
						<img src={card.imagelink} className="create-card-image" />
					) : null}

					<button
						type="button"
						onClick={() => {
							toDelete(card);
						}}
					>
						Delete
					</button>
				</Card.Body>
				<div className="back">
					<p>{card.answer}</p>
					{card.audiolink ? (
						<>
							<audio className="audio-player" src={card.audiolink} controls />
						</>
					) : null}
				</div>
			</Card>
		</div>
	);
}

export default Flashcard;
