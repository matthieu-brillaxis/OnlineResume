import React, { Component } from 'react';
import Filter from './elements/Filter';
import SkillCard from './elements/SkillCard';

export default class Skill extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skillList: this.props,
    };
  }

  // JE PENSE QUE CETTE FUNCTION EST HORRIBLE, ELLE EST UTILISE DANS ./ELEMENTS/FILTER.JS
  filter=(value) => {
    this.state.skillList.map(element => (
      element.type === value ? this.state.skillList.element.active = true : this.state.skillList.active = false
    ));
  }

  // DANS CETTE FUNC JE PEUX PAS UTILISER THIS.STATE ET JE SAIS PAS POURQUOI CAR JE SUIS EN ARROW FUNC POURTANT
  renderSkills = () => {
    this.state.skillList.map(element => <SkillCard key={element.id} element={element} />);
  }

  render() {
    return (
      <div className="section-container">
        <h2 className="section-title">Mes compétences</h2>
        <div className="skill-container">
          <ul className="skill-filter-container">
            <Filter title="Tous" filter={this.filter()} /> {/* JE VEUX PASSER LA FUNCTION filter() DANS LE COMPO FILTER ET QUE CE COMPO LANCE LA FUNC ET QUE CA SOIT LUI QUI SPECIFIE LA VALEUR */}
            <Filter title="Front" filter={this.filter()} />
            <Filter title="Back" filter={this.filter()} />
            <Filter title="Mobile" filter={this.filter()} />
            <Filter title="Autre" filter={this.filter()} />
          </ul>
          <div className="skill-result-container">
            {this.renderSkills()} {/* JE PEUX UTILISER THIS.STATE DANS LA FUNC SI JE MET this.renderSkills().bind(this) et pas se que j'ai actuellement */}
          </div>
        </div>
      </div>
    );
  }
}
