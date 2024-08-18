import { For } from "solid-js";
import { mockTeams } from "~/mocks";
import Team from "../Team";
import Main from "../Main";
import AddTeam from "../AddTeam";
import { listTeams } from "~/lib/team/list";
import { createAsync } from "@solidjs/router";

export default function TeamsPage() {
  const teams = createAsync(() => listTeams())

  return (
    <Main header="Teams:">
      <AddTeam/>
      <ul class="flex flex-col gap-8">
        <For each={teams()}>{(t) => <Team team={t} />}</For>
      </ul>
    </Main>
  );
}
