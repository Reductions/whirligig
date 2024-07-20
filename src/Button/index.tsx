import { ParentProps } from "solid-js";

type Props = {
  onClick: () => void;
};

export const Button = (props: ParentProps<Props>) => {
  return (
    <button
      class="sketched-border-1 flex w-max items-center justify-center gap-2 border-2 border-stone-800 p-2 shadow-md shadow-stone-800 hover:shadow-lg hover:shadow-stone-800"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
