import React from 'react';
import { LockClosedIcon } from '@heroicons/react/20/solid';
import { Field, Formik, Form } from 'formik';
import TextInput from '../../components/TextInput';

const wait = time =>
  new Promise(resolve => {
    setTimeout(resolve, time);
  });

const fields = [
  {
    component: TextInput,
    name: 'name',
    placeholder: 'Name',
    autoComplete: 'name',
    className: 'rounded-t-md',
  },
  {
    component: TextInput,
    name: 'age',
    placeholder: 'Age',
    type: 'number',
    min: 18,
    max: 100,
  },
  {
    component: TextInput,
    name: 'email',
    placeholder: 'Email',
    type: 'email',
    autoComplete: 'email',
  },
  {
    component: TextInput,
    name: 'password',
    placeholder: 'Password',
    type: 'password',
    autoComplete: 'new-password',
  },
  {
    component: TextInput,
    name: 'confirmPassword',
    placeholder: 'Confirm Password',
    type: 'password',
    autoComplete: 'new-password',
    className: 'rounded-b-md',
  },
];

function Register() {
  return (
    <>
      {/* <LocaleContext.Consumer>
        {value => <h1>{value.locale}</h1>}
      </LocaleContext.Consumer> */}
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
          age: '',
        }}
        onSubmit={async values => {
          console.log(values);
          await wait(5000);
        }}
        validate={values => {
          const errors = {};
          if (!values.name) {
            errors.name = 'Required...';
          }
          if (!values.email) {
            errors.email = 'Required...';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          if (!values.age) {
            errors.age = 'Required...';
          }
          if (!values.password) {
            errors.password = 'Required...';
          }
          if (!values.confirmPassword) {
            errors.confirmPassword = 'Required...';
          }
          return errors;
        }}
      >
        {({ isSubmitting, isValid, dirty }) => (
          <Form className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              {fields.map(field => (
                <Field key={field.name} {...field} />
              ))}
            </div>
            <div>
              <button
                type="submit"
                disabled={!(isValid && dirty) || isSubmitting}
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-slate-400 disabled:cursor-wait"
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
          </Form>
        )}
      </Formik>
    </>
  );
}

export default Register;
