import Button from '@mui/material/Button';
import React from 'react';

class Card extends React.Component {
     
    render () {
    return (
       <div className="col">
        <div className="card" style={{width: '18rem', margin:'40px', textAlign:'center'}}>
        <Button color="secondary" onClick={()=> this.props.increment(this.props.card)}>Aggiungi</Button>
            <img src={this.props.card.img} className="card-img-top" ></img>
            <div className="card-body">
            <span >Quantità {this.props.card.quantita}</span>
                <h5 className="card-title">{this.props.card.nome}</h5>
                <p className="card-text">${this.props.card.prezzo}</p>
                <Button variant="contained" onClick={()=> this.props.delete(this.props.card.id)}>Elimina</Button>
            </div>
        </div>
        </div>
    )
}
}
export default Card;