import { createSignal } from "solid-js";
import PlusIcon from "~/assets/PlusIcon";
import Modal from "../Modal";

export default function AddTeam() {
  const [isModalOpen, setIsModalOpen] = createSignal(false);

  return (
    <>
      <button
        class="sketched-border-1 flex w-max gap-2 border-2 border-stone-800 p-2 shadow-md shadow-stone-800 hover:shadow-lg hover:shadow-stone-800"
        onClick={() => setIsModalOpen(true)}
      >
        <PlusIcon />
        Add team
      </button>
      {isModalOpen() ? <Modal closeModal={() => setIsModalOpen(false)}>go6o</Modal> : null}
    </>
  );
}
