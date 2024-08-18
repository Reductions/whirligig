import { For, ParentProps } from "solid-js";
import { createMockDev } from "~/mocks";
import DevCard from "../DevCard";
import Section from "../Section";
import { TEAM_COLORS } from "~/constants/constants";

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
      <Section header={`Week ${props.from}-${props.to}`}>
        <For each={devs}>
          {(dev) => (
            <DevCard
              id={dev.id}
              teamColor={dev.team.color as keyof typeof TEAM_COLORS}
              team={dev.team.name}
              name={`${dev.firstName} ${dev.lastName}`}
            />
          )}
        </For>
      </Section>
    </li>
  );
}
