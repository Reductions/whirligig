import { ParentProps } from "solid-js";
import NavBar from "../NavBar/NavBar";

export default function PageLayout(props: ParentProps) {
  return (
    <div class="flex h-screen flex-col items-start bg-amber-100 p-12 text-stone-900">
      <NavBar />
      {props.children}
    </div>
  );
}
