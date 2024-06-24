import React, {Dispatch, SetStateAction, useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {NavigateFunction} from "react-router/dist/lib/hooks";
//import { useNavigate} from "react-router-dom"

const SignUp: React.FC = () => {
  const getCountries = async () => {
    const countriesJSON = await fetch("https://restcountries.com/v3.1/all");
    const countryObjects = await countriesJSON.json();
    const countries: string[] = [];
    countryObjects.forEach((country: any) => {
        countries.push(country.name.common)
    })
    countries.sort()
    setCountries(countries)
  };

  useEffect(() => {
    getCountries()
  }, []);

  const navigate: NavigateFunction = useNavigate();

  const [countries, setCountries]: [string[], Dispatch<SetStateAction<string[]>>] = React.useState<string[]>([]);
  const [name, setName]: [string, Dispatch<SetStateAction<string>>] = React.useState<string>("");
  const [email, setEmail]: [string, Dispatch<SetStateAction<string>>] = React.useState<string>("");
  const [password, setPassword]: [string, Dispatch<SetStateAction<string>>] = React.useState<string>("");
  const [confirmPassword, setConfirmPassword]: [string, Dispatch<SetStateAction<string>>] = React.useState<string>("");
  const [phone, setPhone]: [string, Dispatch<SetStateAction<string>>] = React.useState<string>("");
  const [address, setAddress]: [string, Dispatch<SetStateAction<string>>] = React.useState<string>("");
  const [city, setCity]: [string, Dispatch<SetStateAction<string>>] = React.useState<string>("");
  const [zip, setZip]: [string, Dispatch<SetStateAction<string>>] = React.useState<string>("");
  const [country, setCountry]: [string, Dispatch<SetStateAction<string>>] = React.useState<string>("");
  const [errorMessage, setErrorMessage]: [string, Dispatch<SetStateAction<string>>] = React.useState<string>("");

  const nomeChangeHandler: React.ChangeEventHandler<HTMLInputElement> = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setName(target.value);
  };

  const emailChangeHandler: React.ChangeEventHandler<HTMLInputElement> = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(target.value);
  };

  const passwordChangeHandler: React.ChangeEventHandler<HTMLInputElement> = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(target.value);
  };

  const confirmPasswordChangeHandler: React.ChangeEventHandler<
    HTMLInputElement
  > = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(target.value);
  };

  const phoneChangeHandler: React.ChangeEventHandler<HTMLInputElement> = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(target.value);
  };

  const addressChangeHandler: React.ChangeEventHandler<HTMLInputElement> = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(target.value);
  };

  const cityChangeHandler: React.ChangeEventHandler<HTMLInputElement> = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setCity(target.value);
  };

  const zipChangeHandler: React.ChangeEventHandler<HTMLInputElement> = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setZip(target.value);
  };

  const countryChangeHandler = ({target} : React.ChangeEvent<HTMLSelectElement>) => {
    setCountry(target.value);
  };

  const submitHandler: React.FormEventHandler<HTMLFormElement> = async (e: React.FormEvent<HTMLFormElement>) => {

    e?.preventDefault()

    try {
      const result = await  axios.post('/user', {name,email,password,phone,address,country,city,zipCode: zip})

      setName('')
      setEmail('')
      setPassword('')
      setConfirmPassword('')
      setPhone('')
      setAddress('')
      setCountry('')
      setCity('')
      setZip('')
      navigate('/login', {state: { id:2, message:'Account created successfully'}})
    }catch (e) {
      return setErrorMessage('Error creating account')
    }

  };

  return (
      <div className="container text-center" style={{maxWidth: 500}}>
        <p style={{color: "red"}}>{errorMessage}</p>
        <form onSubmit={submitHandler}>
          <h2 className="mb-5">Sign up</h2>
          <div className="form-group required mb-4">
            <label htmlFor="nome" className="form-label control-label">
              Name:
            </label>
            <input
                type="text"
                id="name"
                className="form-control"
                value={name}
                maxLength={250}
                onChange={nomeChangeHandler}
                required
            />
          </div>
          <div className="form-group required mb-4">
            <label htmlFor="email" className="form-label control-label">
              Email:
            </label>
            <input
                type="email"
                id="email"
                className="form-control"
                value={email}
                onChange={emailChangeHandler}
                required
            />
          </div>
          <div className="form-group required mb-4">
            <label htmlFor="password" className="form-label control-label">
              Password:
            </label>
            <input
                type="password"
                id="password"
                minLength={8}
                className="form-control"
                value={password}
                onChange={passwordChangeHandler}
                required
            />
          </div>
          <div className="form-group required mb-4">
            <label htmlFor="confirmPassword" className="form-label control-label">
              Confirm Password:
            </label>
            <input
                type="password"
                id="confirmPassword"
                minLength={8}
                className="form-control"
                value={confirmPassword}
                onChange={confirmPasswordChangeHandler}
                required
            />
          </div>

          {confirmPassword.length > 0 && password !== confirmPassword && (
              <div className="alert alert-danger">Passwords do not match</div>
          )}

          <div className="form-group required mb-4">
            <label htmlFor="phone" className="form-label control-label">
              Phone number:
            </label>
            <input
                type="text"
                id="phone"
                minLength={9}
                maxLength={9}
                className="form-control"
                value={phone}
                onChange={phoneChangeHandler}
                required
            />
          </div>
          <div className="form-group required mb-4">
            <label htmlFor="address" className="form-label control-label">
              Address:
            </label>
            <input
                type="text"
                id="address"
                className="form-control"
                value={address}
                maxLength={250}
                onChange={addressChangeHandler}
                required
            />
          </div>
          <div className="form-group required mb-4">
            <label htmlFor="country" className="form-label control-label">
              Country:
            </label>
            <select onChange={countryChangeHandler} id="country" className="form-select" defaultValue="" required>
              <option value="" disabled>Select a country</option>
              {countries.map((country: string) => <option key={country}>{country}</option>)}
            </select>
          </div>
          <div className="form-group required mb-4">
            <label htmlFor="city" className="form-label control-label">
              City:
            </label>
            <input
                type="text"
                id="city"
                className="form-control"
                maxLength={250}
                value={city}
                onChange={cityChangeHandler}
                required
            />
          </div>
          <div className="form-group required mb-4">
            <label htmlFor="zip" className="form-label control-label">
              Zip code:
            </label>
            <input
                type="text"
                id="zip"
                maxLength={30}
                className="form-control"
                value={zip}
                onChange={zipChangeHandler}
                required
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary mb-4">
              Sign up
            </button>
          </div>
        </form>
      </div>
  );
};

export default SignUp;
