import { For } from "solid-js";
import { TEAM_COLORS } from "~/constants/constants";
import DevCard from "../DevCard/DevCard";

const dummyDevs = Object.keys(TEAM_COLORS);

export default function ExpiredWeek() {
  return (
    <li>
      <ul>
        <For each={dummyDevs}>
          {(dev) => (
            <DevCard
              id={dev}
              teamColor={dev as keyof typeof TEAM_COLORS}
              team={dev}
              name={dev}
            />
          )}
        </For>
      </ul>
    </li>
  );
}
