import { ParentProps } from "solid-js";

type Props = {
  header: string;
};

export default function Main(props: ParentProps<Props>) {
  return (
    <main class="sketched-border-1 w-full border-4 border-stone-900 overflow-hidden">
      <div class="sketched-border-2 flex w-full flex-col gap-8 border-2 border-stone-900 p-8">
        <h1 class="text-2xl">{props.header}</h1>
        {props.children}
      </div>
    </main>
  );
}
