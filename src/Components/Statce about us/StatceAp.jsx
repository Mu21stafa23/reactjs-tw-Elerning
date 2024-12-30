import React from 'react';
import { UserGroupIcon, BookOpenIcon, BriefcaseIcon, MapIcon } from '@heroicons/react/24/outline';
import CountUp from 'react-countup';

const stats = [
  { id: 1, name: 'Students', value: 1200, icon: UserGroupIcon },
  { id: 2, name: 'Courses', value: 23, icon: BookOpenIcon },
  { id: 3, name: 'Staff', value: 80, icon: BriefcaseIcon },
  { id: 4, name: 'Locations', value: 3, icon: MapIcon },
];

export default function StatceAp() {
  return (
    <>
      <hr />
      <div className="bg-gray-900 text-white py-24 sm:py-16">
      
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* <h2 className='text-center justify-center'>our </h2> */}
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4 sm:grid-cols-2">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col items-center gap-y-4">
                <stat.icon className="h-12 w-12 text-white" aria-hidden="true" />
                <dt className="text-base font-medium text-white">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                  <CountUp end={stat.value} duration={2} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </>
  );
}
