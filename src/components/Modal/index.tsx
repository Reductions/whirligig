import { ParentProps } from "solid-js";

type Props = {
  ref: HTMLDialogElement;
};

export default function Modal(props: ParentProps<Props>) {
  return (
    <dialog
      class="sketched-border-1 relative flex min-w-96 flex-col gap-4 rounded border-4 border-stone-800 bg-amber-100 p-4"
      ref={props.ref}
    >
      {props.children}
    </dialog>
  );
}
