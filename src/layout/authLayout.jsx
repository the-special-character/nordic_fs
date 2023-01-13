import React from 'react';
import { connect } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

function AuthLayout({ user }) {
  const navigate = useNavigate();

  if (user) {
    return navigate('/');
  }

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        {/* <LocaleContext.Consumer>
          {value => (
            <div>
              <h1>{value.locale}</h1>
              <button type="button" onClick={value.toggleLocale}>
                Toggle Locale
              </button>
            </div>
          )}
        </LocaleContext.Consumer> */}
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <a
              href="/register"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              start your 14-day free trial
            </a>
          </p>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(AuthLayout);
