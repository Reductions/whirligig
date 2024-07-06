import { For, ParentProps } from "solid-js";
import { createMockDev, mockTeams } from "~/mocks";
import DevCard from "../DevCard";
import Section from "../Section";

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
      <Section header={props.team.name}>
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
      </Section>
    </li>
  );
}
