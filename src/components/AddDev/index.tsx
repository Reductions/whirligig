import PlusIcon from "~/assets/PlusIcon";
import Modal from "../Modal";
import { Form } from "../Form/Form";
import { LabelInput } from "../Form/LabelInput";
import { DEV_NAME_PATTERN, TEAM_COLORS } from "~/constants/constants";
import { createSignal, For } from "solid-js";
import DevCard from "../DevCard";
import { Button } from "~/Button";
import { createAsync } from "@solidjs/router";
import { listTeams } from "~/lib/team/list";
import { createDev } from "~/lib/dev/create";
import { CheckboxInput } from "../Form/CheckboxInput";

export default function AddDev() {
  let modalRef!: HTMLDialogElement;

  const teams = createAsync(() => listTeams());

  const defaultSelectedTeam = { name: "", id: NaN, color: "" };

  const [selectedTeam, setSelectedTeam] = createSignal(
    teams()?.[0] || defaultSelectedTeam,
  );

  const [firstName, setFirstName] = createSignal("");
  const [lastName, setLastName] = createSignal("");
  const [isTechLead, setIsTechLead] = createSignal(false);

  return (
    <>
      <Button
        onClick={() => {
          modalRef.showModal();
        }}
      >
        <PlusIcon />
        Add dev
      </Button>
      <Modal ref={modalRef} title="Add dev:" onClose={() => modalRef.close()}>
        <Form
          name="addTeam"
          onSubmit={() => {
            modalRef.close();
          }}
        >
          <LabelInput
            title="First Name:"
            required={true}
            value={firstName()}
            onInput={(e) => {
              setFirstName(e.target.value);
            }}
            maxLength={15}
            pattern={DEV_NAME_PATTERN}
          ></LabelInput>
          <LabelInput
            title="Last Name:"
            required={true}
            value={lastName()}
            onInput={(e) => {
              setLastName(e.target.value);
            }}
            maxLength={20}
            pattern={DEV_NAME_PATTERN}
          ></LabelInput>
          <div class="flex flex-col">
            <label for="team">Team:</label>
            <select
              id="team"
              name="team"
              class="sketched-border-1 border-2 border-stone-800 bg-amber-200 p-2"
              value={teams()?.[0].name || ''}
              onChange={(e) =>
                setSelectedTeam(
                  teams()?.filter((t) => t.name === e.currentTarget.value)[0] ||
                    defaultSelectedTeam,
                )
              }
            >
              <For each={teams()}>
                {(t) => <option value={t.name}>{t.name}</option>}
              </For>
            </select>
          </div>
          <CheckboxInput
            title="Is tech lead:"
            checked={isTechLead()}
            onInput={() => setIsTechLead((prev) => !prev)}
          />
          <ul>
            <label>Preview:</label>
            <DevCard
              id={NaN}
              teamColor={selectedTeam().color as keyof typeof TEAM_COLORS}
              team={selectedTeam().name}
              name={`${firstName()} ${lastName()}`}
            />
          </ul>
          <Button
            onClick={() =>
              createDev({
                firstName: firstName(),
                lastName: lastName(),
                techLead: isTechLead(),
                currentTeam: selectedTeam().id,
              })
            }
          >
            Submit
          </Button>
        </Form>
      </Modal>
    </>
  );
}
