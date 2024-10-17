"use client";
import { Button } from "@/app/components/ui/button"
import { SignedIn, SignedOut, useClerk, UserButton } from "@clerk/nextjs"
import Link from "next/link"

function Header() {

   const { redirectToSignIn } = useClerk();
    const handleLogin = () => {
    redirectToSignIn(); // Redirect to Clerk's sign-in page
  };

  return (
	 <header className="w-full border-b bg-white shadow-md">
		<div className="wrapper flex items-center justify-between">
			<Link href="/" className="w-36">
			<h1 className="text-5xl  text-indigo-600">RATIBA</h1>
			</Link>

	<div className="flex-grow flex items-center justify-end space-x-4">
		<SignedIn>
			<UserButton afterSignOutUrl="/" />
		</SignedIn>
	<SignedOut>
          <Button className="rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition" size="lg" onClick={handleLogin}>
            Login
          </Button>
        </SignedOut>
	</div>
	</div>
	</header>	
  )
}

export default Header
