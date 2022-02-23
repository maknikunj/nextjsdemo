import Link from 'next/link';


const index = () => {
  return (
    <div>
      <nav>
        <ul>
         <h1><li> <Link href='/home' >Home </Link></li></h1>
         <h1> <li><Link href='/blog' >blog </Link></li></h1>
         <h1><li> <Link href='/blog/blog1' >blog1  </Link></li></h1>
         <h1><li> <Link href='/blog/blog2' >blog2 </Link></li></h1>
        </ul>
      </nav>
    
      
    </div>
  )
}
export default index;
