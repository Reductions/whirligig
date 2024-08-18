import { createResource, For, ParentProps } from "solid-js";
import DevCard from "../DevCard";
import Section from "../Section";
import { listDevs } from "~/lib/dev/list";
import { TEAM_COLORS } from "~/constants/constants";

type Props = {
  team: {id: number, name: string; color: string };
};

export default function Team(props: ParentProps<Props>) {
 const [devs] = createResource(listDevs)

  return (
    <li class="flex flex-col gap-4">
      <Section header={props.team.name}>
        <For each={devs()?.filter(d => d.currentTeam.id === props.team.id)}>
          {(dev) => (
            <DevCard
              id={dev.id}
              teamColor={dev.currentTeam.color as keyof typeof TEAM_COLORS}
              team={dev.currentTeam.name}
              name={`${dev.firstName} ${dev.lastName}`}
            />
          )}
        </For>
      </Section>
    </li>
  );
}
