import Image from "next/image"
import Link from "next/link"

function Footer() {
  return (
	<div className="justify-center items-center" >
	 <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href='/'>
          RATIBA
        </Link>

        <p>2024 RATIBA. All Rights reserved.</p>
      </div>
    </footer>
	</div>
  )
}

export default Footer

