import ExpiredWeek from "../ExpiredWeek/ExpiredWeek";

export default function WeekList() {
  return (
    <div class="sketched-border-1 h-full w-full border-4 border-stone-900">
      <div class="sketched-border-2 h-full w-full gap-8 border-2 border-stone-900 p-8 flex flex-col">
        <h1 class="text-2xl">Weekly Rotation:</h1>
        <ul class="flex flex-col gap-8">
          <ExpiredWeek from="13.04.2024" to="20.04.2024" />
          <ExpiredWeek from="06.04.2024" to="13.04.2024" />
          <ExpiredWeek from="31.03.2024" to="06.04.2024" />
        </ul>
      </div>
    </div>
  );
}
