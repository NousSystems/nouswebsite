/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

//Background imports


import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

//Image imports
import Image from 'next/image'
import tom from '@/images/team/Tom.jpg'
import mo from '@/images/team/Mo.jpg'
import kris from '@/images/team/Kris.jpg'
import henry from '@/images/team/Henry.jpg'
import ollie from '@/images/team/Ollie.jpg'
import rinor from '@/images/team/Rinor.jpg'
import manuel from '@/images/team/Manuel.jpg'
import ylli from '@/images/team/Ylli.jpg'




const people = [
    {
      name: 'Tom Stuart',
      role: 'CEO, Founder',
      imageUrl: tom,
      twitterUrl: 'https://www.twitter.com/0xTatruso',
      linkedinUrl: 'https://www.linkedin.com/in/thomas-stuart-53983a236/',
    },
    {
        name: 'Muhamed Selmani',
        role: 'CIO, Founder',
        imageUrl: mo,
        twitterUrl: 'https://twitter.com/0xSors',
        linkedinUrl: 'https://www.linkedin.com/in/muhamed-selmani-148564172/',
      },
      {
        name: 'Kristijan Zivcec',
        role: 'CTO, Founder',
        imageUrl: kris,
        twitterUrl: '',
        linkedinUrl: 'https://www.linkedin.com/in/kristijan-%C5%BEiv%C4%8Dec-a56a1b50/',
      },
      {
        name: 'Ollie Francis',
        role: 'Senior Developer',
        imageUrl: ollie,
        twitterUrl: 'https://twitter.com/OllieFrancis18',
        linkedinUrl: 'https://www.linkedin.com/in/ollie--francis/',
      },
      {
        name: 'Henry Wilson',
        role: 'Head of Communications',
        imageUrl: henry,
        twitterUrl: '',
        linkedinUrl: 'https://www.linkedin.com/in/henry-wilson-7508aa1a6/',
      },
      {
        name: 'Rinor Restelica',
        role: 'Head of Growth',
        imageUrl: rinor,
        twitterUrl: 'https://twitter.com/rinor_777',
        linkedinUrl: 'https://www.linkedin.com/in/rinor-restelica/',
      },
      {
        name: 'Ylli Bilcaj',
        role: 'Head of Community',
        imageUrl: ylli,
        twitterUrl: 'https://twitter.com/YBicaj',
        linkedinUrl: 'https://www.linkedin.com/in/ylli-bicaj-034321201/',
      },
    // More people...
  ]
  
  export default function Team() {
    return (
        <section
        id="team"
        aria-labelledby="team-title"
        className="relative overflow-hidden bg-slate-50 py-20 sm:py-16"
      >
       {/*  <Image
        className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      /> */}
        <Container className="relative">
          
        <div className="mx-auto py-4 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-8">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
              <h2 id="team-title" className="text-3xl font-medium font-display tracking-tight sm:text-5xl">Our power is in our people.</h2>
              <p className="text-lg font-sans text-slate-600">
                A team of young entrepreneurs and industry experts collaborating on the world&apos;s first decentralised marketplace for investment opportunities.
              </p>
            </div>
            <ul
              role="list"
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
            >
              {people.map((person) => (
                <li key={person.name}>
                  <div className="space-y-4">
                    <div className="aspect-w-3 aspect-h-2">
                    <div className="object-cover relative shadow-lg rounded-lg ">
                        <Image  src={person.imageUrl} alt="" layout="responsive" objectFit="cover" className="rounded-lg shadow-lg" />
                    </div>
                    </div>
  
                    <div className="space-y-2">
                      <div className="text-lg leading-6 font-medium space-y-1">
                        <h3>{person.name}</h3>
                        <p className="text-blue-600">{person.role}</p>
                      </div>
                      <ul role="list" className="flex space-x-5">
                        <li>
                          <a href={person.twitterUrl} className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Twitter</span>
                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">LinkedIn</span>
                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
      </section>
    )
  }
  