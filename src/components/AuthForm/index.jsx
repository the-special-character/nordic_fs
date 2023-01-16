import { Field, Form, Formik } from 'formik';
import { LockClosedIcon } from '@heroicons/react/20/solid';
import React from 'react';

function AuthForm({ fields, btnText, children, ...rest }) {
  return (
    <Formik {...rest}>
      {({ isSubmitting, isValid, dirty, errors }) => (
        <Form className="mt-8 space-y-6">
          <input type="hidden" name="remember" defaultValue="true" />
          {errors.serverError && (
            <p className="text-red-500 text-center text-xl">
              {errors.serverError}
            </p>
          )}
          <div className="-space-y-px rounded-md shadow-sm">
            {fields.map(field => (
              <Field key={field.name} {...field} />
            ))}
          </div>
          {children}
          <div>
            <button
              type="submit"
              disabled={!(isValid && dirty) || isSubmitting}
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-slate-400 disabled:cursor-wait"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-indigo-600 group-hover:text-indigo-400"
                  aria-hidden="true"
                />
              </span>
              {btnText}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default AuthForm;
