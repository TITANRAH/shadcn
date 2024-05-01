import { Button } from "@/components/ui/button";
import { PersonStandingIcon } from "lucide-react";
import Link from "next/link";

function page() {
  return (
    <>
      <h1 className="flex gap-2 items-center ">
        <PersonStandingIcon size={50} className="text-pink-500" /> Support Me
      </h1>

      <p>The best dashboard to manage customer support</p>

      <div className="flex gap-2 items-center">
        <Button>
          <Link href="/login">Login</Link>
        </Button>
        <small>or</small>
        <Button asChild variant="outline">
          <Link href="/sign-up">Login</Link>
        </Button>
      </div>
    </>
  );
}

export default page;
