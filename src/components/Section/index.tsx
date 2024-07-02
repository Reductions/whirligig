import { ParentProps } from "solid-js";

type Props = {
  header: string;
};

export default function Section(props: ParentProps<Props>) {
  return (
    <li class="flex flex-col gap-4">
      <h2 class="sketched-line border-b-4 border-b-stone-800 text-xl">
        {props.header}
      </h2>
      <ul class="flex gap-4 flex-wrap">{props.children}</ul>
    </li>
  );
}
