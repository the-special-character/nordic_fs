import React from 'react';
import { connect } from 'react-redux';
import TextInput from '../../components/TextInput';
import AuthForm from '../../components/AuthForm';
import { login } from '../../actions/authAction';

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

function Login({ login }) {
  return (
    <AuthForm
      fields={fields}
      btnText="Sign in"
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={login}
    >
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
    </AuthForm>
  );
}

const mapDispatchToProps = dispatch => ({
  login: (values, actions) => login(values, actions)(dispatch),
});

export default connect(null, mapDispatchToProps)(Login);
