import { For, ParentProps } from "solid-js";
import { createMockDev } from "~/mocks";
import DevCard from "../DevCard";

type Props = {
  from: string;
  to: string;
};

export default function ExpiredWeek(props: ParentProps<Props>) {
  const devs = [];
  for (let i = 0; i < 3; i++) {
    devs.push(createMockDev());
  }

  return (
    <li class="flex flex-col gap-4">
      <h2 class="sketched-line border-b-4 border-b-stone-800 text-xl">
        Week {props.from}-{props.to}
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
