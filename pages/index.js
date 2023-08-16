import { Inter } from 'next/font/google';
import { useState } from 'react';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [location, setLocation] = useState('');
  const [minium, setMinimum] = useState('');
  const [maximam, setMaximum] = useState('');
  const [average, setAverage] = useState('');
  const [json, setJson] = useState('Report Table Coming Soon...');

  async function all() {
    const dataToSave = {
      Location: location,
      Minimum: minium,
      Maximum: maximam,
      Average: average,
    };
    console.log(dataToSave);
    setJson(JSON.stringify(dataToSave));
  }

const submitHandler = (event) => {
    event.preventDefault();
    setLocation(event.target.location.value);
    setMinimum(event.target.Minimum.value);
    setMaximum(event.target.Maximum.value);
    setAverage(event.target.Average.value);
    all();
  }

  return (
    <>
      <Hhead />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className={`flex flex-col items-center justify-between p-8 ${inter.className}`}>
          <Form handler={submitHandler} />
          <h1 className="mt-10 text-2xl font-semibold text-blac">{json}</h1>
        </main>
        <Footer />
      </div>
    </>
  );
}

function Hhead() {
  return (
    <Head>
      <title>Home</title>
    </Head>
  );
}

function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-300 text-gray-800">
      <h1 className="text-4xl font-bold">Cookie Stand Admin</h1>
    </header>
  );
}

function Form(props) {
  return (
    <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-10 mx-auto bg-gray-100 rounded-lg lg:px-8 max-w-screen-xl">
      <h1 className="mt-5 text-3xl font-bold text-center text-black">Create Cookie Stand</h1>
      <form className="mt-10 space-y-6" onSubmit={props.handler}>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <FormField label="Location" id="location" type="text" required />
          <FormField label="Minimum Customers per Hour" id="Minimum" type="number" required />
          <FormField label="Maximum Customers per Hour" id="Maximum" type="number" required />
          <FormField label="Average Cookies per Sale" id="Average" type="number" required />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full px-6 py-3 text-white bg-green-700 rounded-md hover:bg-green-600"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

function FormField({ label, id, type, required }) {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={id} className="text-sm font-semibold text-black">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        autoComplete={id}
        required={required}
        className="w-full py-2 px-4 mt-1 text-gray-800 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="p-4 mt-8 bg-gray-300 text-gray-800">
      &copy; {new Date().getFullYear()} Firas Awadallah
    </footer>
  );
}