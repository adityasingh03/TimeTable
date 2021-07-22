import { useContext } from "react";
import Timetable from "./Timetable";
import styles from "./Timetable.module.css";
import ContextDay from "../../store/auth-context";
const EveryDay = (props) => {
  const cntxt = useContext(ContextDay);
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th colSpan="5">Lecture</th>

          <th colSpan="4">Lab</th>
        </tr>
        <tr>
          <th>
            Time
            <hr />
            Day
            <br />
          </th>
          <th>8:00 - 9:00</th>
          <th>9:00 - 10:00</th>
          <th>10:15 - 11:15</th>
          <th>11:15 - 12:15</th>
          <th>1:15 - 2:15</th>
          <th>2:15 - 3:15</th>
          <th>3:15 - 4:15</th>
          <th>4:30 - 5:30</th>
        </tr>
      </thead>
      <tbody>
        {console.log(cntxt)}
        {cntxt.val.map((e) => (
          <Timetable day={e} key={e[0].sub} />
        ))}
      </tbody>
    </table>
  );
};
export default EveryDay;
