import { ParentProps } from "solid-js";
import { TEAM_COLORS } from "~/constants/constants";

type Props = {
  name: string;
  team: string;
  id: string;
  teamColor: keyof typeof TEAM_COLORS;
};

export default function DevCard(props: ParentProps<Props>) {
  return (
    <li class={`w-max sketched-border-2 border-2 border-stone-800 ${TEAM_COLORS[props.teamColor]}`}>
      <div class={`flex w-max gap-4 rounded-xl border-2 border-stone-800 p-4 sketched-border-1 ${TEAM_COLORS[props.teamColor]}`}>
        <img
          class={`rounded-xl border bg-amber-100 sketched-border-2 border-stone-800 w-16 h-16`}
          src={`https://robohash.org/${props.id}/?set=set4&size=64x64`}
          alt={`Avatar of ${props.name}`}
        />
        <div class="flex flex-col justify-center">
          <div>Name: {props.name}</div>
          <div>Team: {props.team}</div>
        </div>
      </div>
    </li>
  );
}
