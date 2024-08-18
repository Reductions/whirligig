import { ParentProps } from "solid-js";

type Props = {
    name: string;
    onSubmit: () => void;
}

export const Form = (props: ParentProps<Props>) => {
  return (
    <form
      class="flex flex-col gap-2"
      name={props.name}
      onSubmit={(e) => {
        e.preventDefault();
        props.onSubmit();
      }}
    >
      {props.children}
    </form>
  );
};
