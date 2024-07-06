import { ParentProps } from "solid-js";
import { Portal } from "solid-js/web";

type Props = {
  closeModal: () => void;
};

export default function Modal(props: ParentProps<Props>) {
  return (
    <Portal>
      <div class="fixed inset-0 z-50 flex items-center justify-center">
        <div
          class="absolute inset-0 backdrop-blur-sm"
          onClick={props.closeModal}
        />
          <dialog
            class="sketched-border-1 relative min-w-96 rounded border-4 border-stone-800 p-4 bg-amber-100"
            open
          >
            {props.children}
          </dialog>
      </div>
    </Portal>
  );
}
