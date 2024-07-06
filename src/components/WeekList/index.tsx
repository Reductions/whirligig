import ExpiredWeek from "../ExpiredWeek";
import Main from "../Main";

export default function WeekList() {
  return (
    <Main header="Weekly rotation:">
      <ul class="flex flex-col gap-8">
        <ExpiredWeek from="13.04.2024" to="20.04.2024" />
        <ExpiredWeek from="06.04.2024" to="13.04.2024" />
        <ExpiredWeek from="31.03.2024" to="06.04.2024" />
      </ul>
    </Main>
  );
}
