import React from "react";
import PropTypes from "prop-types";
import './Contender.scss';

const Contender = (props) => {
    return (
        <div  className="box-section card-display">
            <div className="label">{props.cardDisplay + " " + props.cardTotal}</div>
            <ul>
                {
                    props.cards.map((card, index) => {
                        return (
                            <img  key={index} src={card.images.png} height="200" alt={card.code}/>
                        )
                    })
                }
            </ul>
        </div>
    );
};

Contender.propTypes = {
    cardDisplay: PropTypes.string.isRequired,
    cardTotal: PropTypes.number.isRequired
};

export default Contender;