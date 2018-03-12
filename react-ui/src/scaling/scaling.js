import _ from 'lodash';
import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

import './scaling.css';
import Navigation from '../navigation';

export default class extends Component {

  state = {
    rps: 0,
    requests: _.times(100, (index) => ({
      index,
      active: false,
      makeRequest: this.makeRequest,
      timeout: ms => new Promise(res => setTimeout(res, ms))
    }))
  };

  rangeLabels = _(_.range(0, 110, 10))
    .reduce(function(accum, value) {
      accum[value] = `${value}rps`;
      return accum;
    }, {});

  componentDidMount = () => {
    console.log(this.state.requests);
  }

  async makeRequest() {
    //await this.timeout(1000);
    const response = await fetch('/api');
    const json = await response.json();
    console.log(this.index);
    if(this.active === true) {
      return await this.makeRequest();
    }
  }

  componentDidUpdate = (props, state) => {
    if(state.rps < this.state.rps) {
      for(let index = state.rps; index < this.state.rps; index++) {
        this.state.requests[index].active = true;
        this.state.requests[index].makeRequest();
      }
    } else if(state.rps > this.state.rps) {
      for(let index = this.state.rps; index < state.rps; index++) {
        this.state.requests[index].active = false;
      }
    }
  }

  render = () => {
    return(
      <article>
        <Navigation/>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>
              <section>
                <div className="rps-slider">
                  <InputRange
                    maxValue={100}
                    minValue={0}
                    formatLabel={value => `${value} rps`}
                    value={this.state.rps}
                    onChange={value => this.setState({ rps: value })} />
                </div>
              </section>
            </Grid.Column>
            <Grid.Column width={2}>
              fnjwiefiwe
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </article>
    );
  }
};
