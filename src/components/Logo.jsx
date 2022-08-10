import Image from "next/image"
import nous from '../images/logos/nous.png'
export function Logo(props) {
  return (
    <>
    <div className="h-12 w-12 sm:h-12 sm:w-12 relative">
    <Image src={nous} layout="fill" objectFit="cover"/>
    </div>
    
    </>
  )
}
