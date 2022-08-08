import Image from "next/image"
import nous from '../images/logos/nous.png'
export function Logo(props) {
  return (
    <>
    <div className="h-10 w-10 sm:h-12 sm:w-12 relative">
    <Image src={nous} layout="fill" objectFit="cover"/>
    </div>
    
    </>
  )
}
