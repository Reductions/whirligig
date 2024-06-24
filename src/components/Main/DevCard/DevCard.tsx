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
    <li
      class={`flex w-max gap-4 p-4 ${TEAM_COLORS[props.teamColor]} rounded-xl border-2 border-gray-200`}
    >
      <img
        class="rounded-xl border border-gray-200 bg-gray-200"
        src={`https://robohash.org/${props.id}/?set=set4&size=60x60`}
      />
      <div class="flex flex-col justify-center">
        <div>Name: {props.name}</div>
        <div>Team: {props.team}</div>
      </div>
    </li>
  );
}
