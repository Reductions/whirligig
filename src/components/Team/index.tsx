import { For, ParentProps } from "solid-js";
import { createMockDev, mockTeams } from "~/mocks";
import DevCard from "../DevCard";

type Props = {
  team: (typeof mockTeams)[number];
};

export default function Team(props: ParentProps<Props>) {
  const devs = [];
  for (let i = 0; i < 8; i++) {
    devs.push(createMockDev(props.team));
  }

  return (
    <li class="flex flex-col gap-4">
      <h2 class="sketched-line border-b-4 border-b-stone-800 text-xl">
        {props.team.name}
      </h2>
      <ul class="flex gap-4">
        <For each={devs}>
          {(dev) => (
            <DevCard
              id={dev.id}
              teamColor={dev.team.color}
              team={dev.team.name}
              name={`${dev.firstName} ${dev.lastName}`}
            />
          )}
        </For>
      </ul>
    </li>
  );
}
