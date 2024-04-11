"use client"

import Image from 'next/image';
import Navbar from './component/Navbar';
import { useSession } from 'next-auth/react';

export default function Home(){

  const {data : session} = useSession();

   return (
    <main>
      <Navbar session={session}/>
      <div>
        <h3>Welcome to home page</h3>
        <hr className='my-3'/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum similique voluptatem adipisci perferendis cumque exercitationem sequi incidunt dolores nam aliquam tempore id animi, obcaecati ducimus pariatur architecto necessitatibus quos odit.</p>
      </div>
    </main>
  );

}
 
