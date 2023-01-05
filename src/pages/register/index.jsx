import React, { useContext } from 'react';
import TextInput from '../../components/TextInput';
import AuthForm from '../../components/AuthForm';
import { AuthContext } from '../../context/authContext';

const fields = [
  {
    component: TextInput,
    name: 'name',
    placeholder: 'Name',
    autoComplete: 'name',
    className: 'rounded-t-md',
    validate: value => {
      if (!value) return 'Required...';
      return '';
    },
  },
  {
    component: TextInput,
    name: 'age',
    placeholder: 'Age',
    type: 'number',
    min: 18,
    max: 100,
    validate: value => {
      if (!value) return 'Required...';
      return '';
    },
  },
  {
    component: TextInput,
    name: 'email',
    placeholder: 'Email',
    type: 'email',
    autoComplete: 'email',
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
    validate: value => {
      if (!value) return 'Required...';
      return '';
    },
  },
  {
    component: TextInput,
    name: 'confirmPassword',
    placeholder: 'Confirm Password',
    type: 'password',
    autoComplete: 'new-password',
    className: 'rounded-b-md',
    validate: value => {
      // console.log(ref.password);
      if (!value) return 'Required...';
      return '';
    },
  },
];

function Register() {
  const { register } = useContext(AuthContext);

  return (
    <AuthForm
      fields={fields}
      btnText="Sign up"
      initialValues={{
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        age: '',
      }}
      onSubmit={register}
      validate={values => {
        const errors = {};
        if (values.password !== values.confirmPassword) {
          errors.confirmPassword =
            'password and confirmPassword should be same';
        }
        return errors;
      }}
    />
  );
}

export default Register;
