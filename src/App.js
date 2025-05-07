import logo from "./logo.svg";
import "./App.css";
import moment from "moment";
export const getFirstWeekdaySetting = (n) => {
  let firstWeekdayNumber;

  try {
    firstWeekdayNumber = n;
  } catch (err) {
    console.error(err);
  }

  let result = "Monday";
  if (firstWeekdayNumber === 0) {
    result = "Sunday";
  } else if (firstWeekdayNumber === 6) {
    result = "Saturday";
  }

  return result;
};
function App() {
  const case_1 = {
    from: moment().startOf("isoWeek").toDate(),
    to: moment().endOf("isoWeek").toDate(),
  };
  const case_2 = {
    from: moment().isoWeekday(getFirstWeekdaySetting(0)),
    to: moment().isoWeekday(getFirstWeekdaySetting(0)).add(6, "d"),
  };
  const case_3 = {
    from: moment().startOf("isoWeek").isoWeekday(getFirstWeekdaySetting(0)),
    to: moment()
      .startOf("isoWeek")
      .isoWeekday(getFirstWeekdaySetting(0))
      .add(6, "d"),
  };
  const case_4 = {
    from: moment().isoWeekday(getFirstWeekdaySetting(1)),
    to: moment().isoWeekday(getFirstWeekdaySetting(1)).add(6, "d"),
  };
  const case_5 = {
    from: moment().startOf("isoWeek").isoWeekday(getFirstWeekdaySetting(1)),
    to: moment()
      .startOf("isoWeek")
      .isoWeekday(getFirstWeekdaySetting(1))
      .add(6, "d"),
  };
  return (
    <div className="App">
      <div>
        <h1>Case 1</h1>
        <p>From: {case_1.from.toString()}</p>
        <p>To: {case_1.to.toString()}</p>
      </div>
      <div>
        <h1>Case 2</h1>
        <p>From: {case_2.from.toString()}</p>
        <p>To: {case_2.to.toString()}</p>
      </div>
      <div>
        <h1>Case 3</h1>
        <p>From: {case_3.from.toString()}</p>
        <p>To: {case_3.to.toString()}</p>
      </div>
      <div>
        <h1>Case 4</h1>
        <p>From: {case_4.from.toString()}</p>
        <p>To: {case_4.to.toString()}</p>
        </div>
      <div>
        <h1>Case 5</h1>
        <p>From: {case_5.from.toString()}</p>
        <p>To: {case_5.to.toString()}</p>
        </div>
    </div>
  );
}

export default App;
