import React from 'react';
import {connect} from "react-redux"
import {increment, decrement, reset} from "./ducks"

class Counter extends React.Component {

  componentDidMount() {
    // on appelle un dispatch Redux seulement une fois que le composant est monté
    if (this.props.defaultCount) {
      this.props.reset(this.props.id, this.props.defaultCount)
    }
  }

  render() {
    // les props viennent soit de App, soit des mapStateToProps (pour les data), soit de MapDispatchToProps (pour les fonctions)
    const { id, count, defaultCount, decrement, increment, reset } = this.props
    return (
      <div>
        <h1>Compteur</h1>
        <button onClick={() => decrement(id)}>-</button>
        <span style={{ margin: "0 10px" }}>{count}</span>
        <button onClick={() => increment(id)}>+</button>
        <div>
          <button onClick={() => reset(id, defaultCount)}>reset</button>
        </div>
      </div>
  )}
}

// utilitaire pour récupérer uniquement la portion de state correspondant à ce compteur
function getOwnState(state, id) {
  return state.filter(c => c.id === id)[0] // filter rend un tableau et on est sûr qu'il y a toujours 1 élément
}

// le 2ème paramètre de mapStateToProps représente les props actuelles du composant
const mapStateToProps = (state, {id}) => ({
  ...getOwnState(state, id)
})

// utilisation de mapDispatchToProps avec un objet. Redux wrappe tous les appels avec dispatch
const mapDispatchToProps = {
  decrement: id => decrement(id),
  increment: id => increment(id),
  reset: (id, defaultCount) => reset(id, defaultCount)
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
