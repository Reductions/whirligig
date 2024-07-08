import PlusIcon from "~/assets/PlusIcon";
import Modal from "../Modal";
import { createEffect } from "solid-js";

export default function AddTeam() {
  let modalRef!: HTMLDialogElement;

  createEffect(() => {
    modalRef.close();
  });

  return (
    <>
      <button
        class="sketched-border-1 flex w-max gap-2 border-2 border-stone-800 p-2 shadow-md shadow-stone-800 hover:shadow-lg hover:shadow-stone-800"
        onClick={() => {
          modalRef.showModal();
        }}
      >
        <PlusIcon />
        Add team
      </button>
      <Modal ref={modalRef}>
        <div class="sketched-line flex w-full border-b-4 border-stone-800">
          <h1>Add team:</h1>
          <button onClick={() => modalRef.close()} class="flex-1">
            x
          </button>
        </div>
      </Modal>
    </>
  );
}
