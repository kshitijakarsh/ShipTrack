import { signIn } from "@/auth";

export default function LoginPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <form
        action={async () => {
          "use server";
          await signIn("github");
        }}
      >
        <button
          className="
            rounded-2xl
            px-6
            py-3
            text-white
            font-medium
            bg-gradient-to-br
            from-zinc-800
            via-black
            to-zinc-900
            border
            border-zinc-700
            shadow-[0_4px_10px_rgba(0,0,0,0.45),inset_0_1px_1px_rgba(255,255,255,0.12),inset_0_-2px_4px_rgba(0,0,0,0.5)]
            hover:shadow-[0_6px_14px_rgba(0,0,0,0.55),inset_0_1px_1px_rgba(255,255,255,0.15),inset_0_-2px_6px_rgba(0,0,0,0.6)]
            hover:-translate-y-[1px]
            active:translate-y-[1px]
            active:shadow-[inset_0_3px_6px_rgba(0,0,0,0.6)]
            transition-all
            duration-200
          "
        >
          Sign In With GitHub
        </button>
      </form>
    </div>
  );
}
