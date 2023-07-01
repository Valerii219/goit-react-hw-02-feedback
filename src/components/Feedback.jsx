const FeedbackOptions =({options, onLeaveFeedback}) =>{
    return (
               
        <div className="" > 
        <h2 className="">Please leave feedback</h2>
        {options.map(option => (
        <button key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      ))}
        </div>
)
}
    

export default FeedbackOptions;