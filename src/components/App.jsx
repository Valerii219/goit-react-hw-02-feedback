import FeedbackOptions from "./Feedback";
import Statistics from "./Statistics/Statistics";
import React, { Component } from "react";
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleClick = option => {
    this.setState(prevState => ({
     [option]: prevState[option] + 1,
    }));
  };

  render() {
    const {good, neutral, bad} = this.state;
    const total =  good + neutral + bad;
  
    const positivePercentage = () => {
      if (total === 0) {
        return 0;
      }
  
      return Math.round((good / total) * 100);
    };
  
    return (
      <>
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 40,
            color: "#010101"
          }}
        >
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={total}
            positivePercentage={positivePercentage()}
          />
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleClick}
          />
          {/* <Notification message="There is no feedback"/> */}
        </div>
      </>
    );
  }
}

export default App;

