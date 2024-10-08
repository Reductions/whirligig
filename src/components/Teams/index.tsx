import { For } from "solid-js";
import { mockTeams } from "~/mocks";
import Team from "../Team";
import Main from "../Main";
import AddTeam from "../AddTeam";

export default function TeamsPage() {
  return (
    <Main header="Teams:">
      <AddTeam/>
      <ul class="flex flex-col gap-8">
        <For each={mockTeams}>{(t) => <Team team={t} />}</For>
      </ul>
    </Main>
  );
}
