import React, { Component } from 'react';
import Form from './Form';
import Results from './Results';

export default class Search extends Component{
  constructor(props) {
    super(props);
    this.state = {
      form: {
        topic: '',
        startYear: '',
        endYear: '',
      },
      results: []
    };

    this.handleTopic = this.handleTopic.bind(this);
    this.handleStart = this.handleStart.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
    this.nytQuery = this.nytQuery.bind(this);
    };

    handleTopic(event) {
      this.setState({ form: { topic: event.target.value } });
    }

    handleStart(event) {
      this.setState({ form: { startYear: event.target.value } });
    }

    handleEnd(event) {
      this.setState({ form: { endYear: event.target.value } });
    }

    nytQuery(results) {
      this.setState({results});
      console.log('yes',this.state.results);
    }

  render() {
  return (
    <div>
      <Form
        formInfo={this.state.form}
        handleTopic={this.handleTopic}
        handleStart={this.handleStart}
        handleEnd={this.handleEnd}
        nytQuery={this.nytQuery}/>
        <Results results={this.state.results}/>
    </div>
  );
  }
}