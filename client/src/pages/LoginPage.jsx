import React, { useEffect, useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault();
		const response = await fetch('http://localhost:5000/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})

		const data = await response.json()
    console.log(data)

		if (data !== null) {
			alert('Login successful')
		} else {
			alert('Please check your username and password')
		}

  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3">

        <div className="text-slate-800 text-3xl mb-4">
          <h1>Login</h1>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="john@example.com"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="********"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  )
};

export default LoginPage;
