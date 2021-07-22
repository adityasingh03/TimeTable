import styles from "./Timetable2.module.css";
const Timetable = (props) => {
  return (
    <tr>
      {props.day.map((e) => (
        <td colSpan={e.span} key={e.id} className={`${styles[`${e.color}`]}`}>
          <a href={e.link} target="_blank" rel="noreferrer">
            {e.sub}
          </a>
        </td>
      ))}
    </tr>
  );
};

export default Timetable;
