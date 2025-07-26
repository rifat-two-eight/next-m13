"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter()
  const isLoggedIn = true;
  const handleNavigation = ()=>{
    if(isLoggedIn){
    router.push("/about/address")
  }
  else{
    router.push("/")
  }
  }
    return (
        <div>
            <nav className="flex justify-center gap-10 my-6">
          <ul>
            <Link href="/"><li>Home</li></Link>
          </ul>
          <ul>
            <Link href="/about"><li>About</li></Link>
          </ul>
          <ul onClick={handleNavigation}>
            <Link href="/about/address"><li>Address</li></Link>
          </ul>
            </nav>
        </div>
    );
};

export default Navbar;