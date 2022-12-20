import React from 'react';
import { LockClosedIcon } from '@heroicons/react/20/solid';
import TextInput from '../../components/TextInput';

function Register() {
  return (
    <form className="mt-8 space-y-6" action="#" method="POST">
      <input type="hidden" name="remember" defaultValue="true" />
      <div className="-space-y-px rounded-md shadow-sm">
        <TextInput
          placeholder="Name"
          autoComplete="name"
          className="rounded-t-md"
        />
        <TextInput placeholder="Email" type="email" autoComplete="email" />
        <TextInput
          placeholder="Password"
          type="password"
          autoComplete="new-password"
        />
        <TextInput
          placeholder="Confirm Password"
          type="password"
          autoComplete="new-password"
          className="rounded-b-md"
        />
      </div>

      <div>
        <button
          type="submit"
          className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <LockClosedIcon
              className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
              aria-hidden="true"
            />
          </span>
          Sign up
        </button>
      </div>
    </form>
  );
}

export default Register;
