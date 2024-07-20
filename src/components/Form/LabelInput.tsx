import { ParentProps } from "solid-js";

type Props = {
  title: string;
  required: boolean;
  value: string;
  onInput: (
    e: Event & {
      currentTarget: HTMLInputElement;
      target: HTMLInputElement;
    },
  ) => void;
  maxLength?: number;
  pattern?: string;
};

export const LabelInput = (props: ParentProps<Props>) => {
  return (
    <div class="flex flex-col">
      <label for={props.title}>{props.title}</label>
      <input
        id={props.title}
        type="text"
        required={props.required}
        value={props.value}
        onInput={props.onInput}
        maxLength={props.maxLength}
        pattern={props.pattern}
        autocomplete="off"
        class="sketched-border-1 border-2 border-stone-800 bg-amber-200 p-2"
      />
    </div>
  );
};
