"use client"

import Navbar from './component/Navbar';
import { useSession } from 'next-auth/react';

export default function Home(){

  const {data : session} = useSession();

   return (
    <main>
      <Navbar session={session}/>
      <div className='flex flex-col mx-auto text-center justify-center items-center mt-10'>
        <h3>Welcome to home page</h3>
        <hr className='my-3'/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum similique voluptatem adipisci perferendis cumque exercitationem sequi incidunt dolores nam aliquam tempore id animi, obcaecati ducimus pariatur architecto necessitatibus quos odit.</p>
      </div>
    </main>
  );

}
 
