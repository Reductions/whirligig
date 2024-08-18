import { createResource, For } from "solid-js";
import Team from "../Team";
import Main from "../Main";
import AddTeam from "../AddTeam";
import { listTeams } from "~/lib/team/list";

export default function TeamsPage() {
  const [teams, { refetch: refetchTeams }] =
    createResource(listTeams);

  return (
    <Main header="Teams:">
      <AddTeam refetchTeams={refetchTeams} />
      <ul class="flex flex-col gap-8">
        <For each={teams()}>{(t) => <Team team={t} />}</For>
      </ul>
    </Main>
  );
}
