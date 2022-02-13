import React, { Component } from 'react';
import { sum, round } from 'lodash';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Section from '../Section/Section';
// import PropTypes from 'prop-types';

const ButtonListArr = ['Good', 'Neutral', 'Bad'];

class Container extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = s => sum(s);
  countPositiveFeedbackPercentage = count =>
    this.state.good ? round((this.state.good / count) * 100) : 0;

  onLeaveFeedback = e => {
    const key = e.currentTarget.textContent.toLowerCase();
    this.setState(prevState => {
      return {
        [key]: prevState[key] + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback(Object.values(this.state));
    const PosFeedback = this.countPositiveFeedbackPercentage(total);

    return (
      <>
        <Section
          title={'Please leave feedback'}
          children={
            <FeedbackOptions
              onLeaveFeedback={this.onLeaveFeedback}
              options={ButtonListArr}
            />
          }
        ></Section>
        <Section
          title={'Statistics'}
          children={
            total ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={PosFeedback}
              />
            ) : (
              <p>"There is no feedback"</p>
            )
          }
        ></Section>
      </>
    );
  }
}
export default Container;
