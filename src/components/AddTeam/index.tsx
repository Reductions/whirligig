import PlusIcon from "~/assets/PlusIcon";
import Modal from "../Modal";
import { Form } from "../Form/Form";
import { LabelInput } from "../Form/LabelInput";
import { TEAM_COLORS, TEAM_NAME_PATTERN } from "~/constants/constants";
import { createSignal, For } from "solid-js";
import DevCard from "../DevCard";
import { Button } from "~/Button";
import { createTeam } from "~/lib/team/create";

type Props = {
    refetchTeams: () => void
}

export default function AddTeam(props: Props) {
  let modalRef!: HTMLDialogElement;

  const [selectedColor, setSelectedColor] = createSignal<
    keyof typeof TEAM_COLORS
  >(Object.keys(TEAM_COLORS)[0] as keyof typeof TEAM_COLORS);

  const [teamName, setTeamName] = createSignal<string>("");

  return (
    <>
      <Button
        onClick={() => {
          modalRef.showModal();
        }}
      >
        <PlusIcon />
        Add team
      </Button>
      <Modal ref={modalRef} title="Add team:" onClose={() => modalRef.close()}>
        <Form
          name="addTeam"
          onSubmit={() => {
            modalRef.close();
          }}
        >
          <LabelInput
            title="Name:"
            required={true}
            value={teamName()}
            onInput={(e) => {
              setTeamName(e.target.value);
            }}
            maxLength={20}
            pattern={TEAM_NAME_PATTERN}
          ></LabelInput>
          <div class="flex flex-col">
            <label for="color">Color:</label>
            <select
              id="color"
              name="color"
              class="sketched-border-1 border-2 border-stone-800 bg-amber-200 p-2"
              onChange={(e) =>
                setSelectedColor(
                  e.currentTarget.value as keyof typeof TEAM_COLORS,
                )
              }
            >
              <For each={Object.keys(TEAM_COLORS)}>
                {(color) => <option value={color}>{color}</option>}
              </For>
            </select>
          </div>
          <ul>
            <label>Preview:</label>
            <DevCard
              id={"test-dev"}
              teamColor={selectedColor()}
              team={teamName()}
              name="ExampleDev"
            />
          </ul>
          <Button
            onClick={() =>
              createTeam({ name: teamName(), color: selectedColor() }).then(() => props.refetchTeams())
            }
          >
            Submit
          </Button>
        </Form>
      </Modal>
    </>
  );
}
