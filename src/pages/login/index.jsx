import React from 'react';
import { Field, Form, Formik } from 'formik';
import { LockClosedIcon } from '@heroicons/react/20/solid';
import TextInput from '../../components/TextInput';

const fields = [
  {
    component: TextInput,
    name: 'email',
    placeholder: 'Email',
    type: 'email',
    autoComplete: 'email',
    className: 'rounded-t-md',
    validate: value => {
      if (!value) return 'Required...';
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        return 'Invalid email address';
      }
      return '';
    },
  },
  {
    component: TextInput,
    name: 'password',
    placeholder: 'Password',
    type: 'password',
    autoComplete: 'new-password',
    className: 'rounded-b-md',
    validate: value => {
      if (!value) return 'Required...';
      return '';
    },
  },
];

function Login() {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
    >
      {() => (
        <Form className="mt-8 space-y-6">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            {fields.map(field => (
              <Field key={field.name} {...field} />
            ))}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
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
              Sign in
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default Login;
