import { ParentProps } from "solid-js";
import NavBar from "../NavBar";

export default function PageLayout(props: ParentProps) {
  return (
    <div class="flex flex-col min-h-screen items-start bg-amber-100 p-12 text-stone-900 gap-12 overflow-hidden">
      <NavBar />
      {props.children}
    </div>
  );
}
