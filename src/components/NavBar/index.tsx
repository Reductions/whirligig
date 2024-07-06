import { A } from "@solidjs/router";

const anchorStyles = "p-4";

export default function NavBar() {
  return (
    <div class="sketched-border-2 w-full border-2 border-stone-900">
      <nav class="sketched-border-1 flex w-full justify-center gap-32 border-2 border-stone-900">
        <A href="/" class={anchorStyles}>
          Rotation
        </A>
        <A href="/teams" class={anchorStyles}>
          Teams
        </A>
        <A href="/devs" class={anchorStyles}>
          Devs
        </A>
      </nav>
    </div>
  );
}
