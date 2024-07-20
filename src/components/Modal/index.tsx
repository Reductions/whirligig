import { ParentProps } from "solid-js";
import CloseIcon from "~/assets/CloseIcon";

type Props = {
  ref: HTMLDialogElement;
  title: string;
  onClose: () => void;
};

export default function Modal(props: ParentProps<Props>) {
  return (
    <dialog
      class="sketched-border-1 relative min-w-96 flex-col gap-4 rounded border-4 border-stone-800 bg-amber-100 p-8 backdrop:backdrop-blur-sm"
      ref={props.ref}
    >
      <div class="align-center justify-between sketched-line flex w-full border-b-4 border-stone-800">
        <h1>{props.title}</h1>
        <button onClick={() => props.onClose()}>
          <CloseIcon />
        </button>
      </div>
      {props.children}
    </dialog>
  );
}
