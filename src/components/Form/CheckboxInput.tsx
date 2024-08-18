import { ParentProps } from "solid-js";
import CheckIcon from "~/assets/CheckIcon";

type Props = {
  title: string;
  checked: boolean;
  onInput: (
    e: Event & {
      currentTarget: HTMLInputElement;
      target: HTMLInputElement;
    },
  ) => void;
};

export const CheckboxInput = (props: ParentProps<Props>) => {
  return (
    <div class="flex flex-col">
      <label for={props.title}>{props.title}</label>
      <div class="relative flex justify-center items-center sketched-border-1 h-6 w-6 border-2 border-stone-800 bg-amber-200"
>
      <input
        checked={props.checked}
        id={props.title}
        type="checkbox"
        onInput={props.onInput}
        class="absolute top-0 left-0 w-6 h-6 appearance-none cursor-pointer"
      />
        {props.checked && <CheckIcon/>}
        </div>
    </div>
  );
};
