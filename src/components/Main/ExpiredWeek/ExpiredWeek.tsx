import { For, ParentProps } from "solid-js";
import { TEAM_COLORS } from "~/constants/constants";
import DevCard from "../DevCard/DevCard";

const dummyDevs = Object.keys(TEAM_COLORS);

type Props = {
  from: string;
  to: string;
};

export default function ExpiredWeek(props: ParentProps<Props>) {
  return (
    <li class="flex flex-col gap-4">
      <h2 class="sketched-line border-b-4 border-b-stone-800 text-xl">
        Week {props.from}-{props.to}
      </h2>
      <ul class="flex gap-4">
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
